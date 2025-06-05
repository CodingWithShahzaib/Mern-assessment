import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { api } from '../../api/api';
import '@testing-library/jest-dom';

// Mock the api and useRandomUser hook
jest.mock('../../api/api');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({ pathname: '/' })
}));

describe('Sidebar component', () => {
  const mockUser = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  };

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    
    // Mock the API response
    (api.getRandomUser as jest.Mock).mockResolvedValue(mockUser);
  });

  test('fetches and displays user data', async () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    // Should show loading state initially
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for user data to load
    await waitFor(() => {
      expect(api.getRandomUser).toHaveBeenCalledTimes(1);
    });

    // Verify user data is displayed
    await waitFor(() => {
      expect(screen.getByTestId('user-name')).toHaveTextContent('John Doe');
      expect(screen.getByTestId('user-email')).toHaveTextContent('john@example.com');
      expect(screen.getByTestId('user-avatar')).toBeInTheDocument();
    });

    // Verify navigation links
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Blogs')).toBeInTheDocument();
  });

  test('shows error message when API fails', async () => {
    // Mock API failure
    (api.getRandomUser as jest.Mock).mockRejectedValue(new Error('API error'));

    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    // Wait for error message to appear
    await waitFor(() => {
      expect(screen.getByText(/error loading user/i)).toBeInTheDocument();
    });
  });
}); 