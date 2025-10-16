import React, { createContext, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/app/store';
import {
  loginUser,
  registerUser,
  logoutUser,
  updateUserPreferences,
  updateUserProfile,
  clearError
} from '@/store/slices/authSlice';
import type { User, LoginRequest, RegisterRequest } from '@/services/authService';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginRequest) => Promise<void>;
  register: (userData: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
  updatePreferences: (preferences: Partial<User['preferences']>) => Promise<void>;
  updateProfile: (updates: Partial<Pick<User, 'name' | 'email'>>) => Promise<void>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useDispatch();

  const { user, isAuthenticated, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const login = async (credentials: LoginRequest) => {
    await dispatch(loginUser(credentials) as any).unwrap();
  };

  const register = async (userData: RegisterRequest) => {
    await dispatch(registerUser(userData) as any).unwrap();
  };

  const logout = async () => {
    await dispatch(logoutUser() as any).unwrap();
  };

  const updatePreferences = async (preferences: Partial<User['preferences']>) => {
    await dispatch(updateUserPreferences(preferences) as any).unwrap();
  };

  const updateProfile = async (updates: Partial<Pick<User, 'name' | 'email'>>) => {
    await dispatch(updateUserProfile(updates) as any).unwrap();
  };

  const clearErrorMessage = () => {
    dispatch(clearError());
  };

  // Auto-refresh token on app start if user is authenticated
  useEffect(() => {
    if (isAuthenticated && !user) {
      // Token might be expired, try to refresh
      dispatch(logoutUser() as any);
    }
  }, [isAuthenticated, user, dispatch]);

  const value: AuthContextType = {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
    updatePreferences,
    updateProfile,
    clearError: clearErrorMessage,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
