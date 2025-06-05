import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { Sidebar } from "../Sidebar";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { api } from "../../api/api";
import { UserProvider } from "../../contexts/UserContext";

vi.mock("../../api/api", () => ({
  api: {
    getRandomUser: vi.fn(),
  },
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useLocation: () => ({ pathname: "/" }),
  };
});

describe("Sidebar component", () => {
  const mockUser = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  };

  beforeEach(() => {
    vi.clearAllMocks();

    (api.getRandomUser as any).mockResolvedValue(mockUser);
  });

  test("fetches and displays user detail", async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <Sidebar />
        </UserProvider>
      </MemoryRouter>
    );

    expect(api.getRandomUser).toHaveBeenCalledTimes(1);
    
    const userEmail = await screen.findByTestId("user-name");
    expect(userEmail).toHaveTextContent("john@example.com");
    
    expect(screen.getByTestId("user-avatar")).toBeInTheDocument();
  });
});
