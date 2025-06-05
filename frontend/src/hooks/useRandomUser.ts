import { useUser } from '../contexts/UserContext';

// This hook is kept for backward compatibility
// It now uses the shared UserContext to ensure consistency
export const useRandomUser = () => {
  return useUser();
}; 