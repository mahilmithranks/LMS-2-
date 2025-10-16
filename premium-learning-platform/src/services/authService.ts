// Mock authentication service - simulates real backend
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
  preferences: {
    notifications: boolean;
    darkMode: boolean;
    language: string;
  };
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

// Mock user database - in real app this would be a backend API
const MOCK_USERS: Record<string, { password: string; user: User }> = {};

class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';
  private readonly USER_KEY = 'auth_user';

  // Simulate API delay
  private async delay(ms: number = 1000): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Generate a mock JWT token
  private generateToken(payload: any): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const body = btoa(JSON.stringify({ ...payload, exp: Date.now() + 24 * 60 * 60 * 1000 })); // 24 hours
    return `${header}.${body}.signature`;
  }

  // Validate email format
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate password strength
  private isValidPassword(password: string): boolean {
    return password.length >= 6;
  }

  // Hash password (in real app this would be done on backend)
  private hashPassword(password: string): string {
    return btoa(password); // Simple base64 encoding for demo
  }

  async register(request: RegisterRequest): Promise<AuthResponse> {
    await this.delay();

    // Validation
    if (!request.name.trim()) {
      throw new Error('Name is required');
    }

    if (!this.isValidEmail(request.email)) {
      throw new Error('Invalid email format');
    }

    if (!this.isValidPassword(request.password)) {
      throw new Error('Password must be at least 6 characters');
    }

    // Check if user already exists
    if (MOCK_USERS[request.email]) {
      throw new Error('User already exists with this email');
    }

    // Create new user
    const user: User = {
      id: Date.now().toString(),
      email: request.email,
      name: request.name.trim(),
      avatar: request.name.charAt(0).toUpperCase(),
      createdAt: new Date().toISOString(),
      preferences: {
        notifications: true,
        darkMode: false,
        language: 'en'
      }
    };

    // Store user
    MOCK_USERS[request.email] = {
      password: this.hashPassword(request.password),
      user
    };

    // Generate tokens
    const token = this.generateToken({ userId: user.id, email: user.email });
    const refreshToken = this.generateToken({ type: 'refresh', userId: user.id });

    // Store in localStorage
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));

    return { user, token, refreshToken };
  }

  async login(request: LoginRequest): Promise<AuthResponse> {
    await this.delay();

    // Validation
    if (!this.isValidEmail(request.email)) {
      throw new Error('Invalid email format');
    }

    if (!request.password) {
      throw new Error('Password is required');
    }

    // Find user
    const userRecord = MOCK_USERS[request.email];
    if (!userRecord) {
      throw new Error('Invalid email or password');
    }

    // Verify password
    const hashedPassword = this.hashPassword(request.password);
    if (userRecord.password !== hashedPassword) {
      throw new Error('Invalid email or password');
    }

    // Generate tokens
    const token = this.generateToken({ userId: userRecord.user.id, email: userRecord.user.email });
    const refreshToken = this.generateToken({ type: 'refresh', userId: userRecord.user.id });

    // Store in localStorage
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
    localStorage.setItem(this.USER_KEY, JSON.stringify(userRecord.user));

    return { user: userRecord.user, token, refreshToken };
  }

  async logout(): Promise<void> {
    await this.delay(300);
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  async refreshToken(): Promise<AuthResponse | null> {
    const refreshToken = localStorage.getItem(this.REFRESH_TOKEN_KEY);
    if (!refreshToken) return null;

    try {
      // In a real app, you'd send this to your backend
      const currentUser = this.getCurrentUser();
      if (!currentUser) return null;

      const newToken = this.generateToken({ userId: currentUser.id, email: currentUser.email });
      const newRefreshToken = this.generateToken({ type: 'refresh', userId: currentUser.id });

      localStorage.setItem(this.TOKEN_KEY, newToken);
      localStorage.setItem(this.REFRESH_TOKEN_KEY, newRefreshToken);

      return { user: currentUser, token: newToken, refreshToken: newRefreshToken };
    } catch (error) {
      this.logout();
      return null;
    }
  }

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (!userStr) return null;

    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    const user = this.getCurrentUser();

    if (!token || !user) return false;

    try {
      // Simple token validation - in real app you'd verify with backend
      return true;
    } catch {
      return false;
    }
  }

  async updateUserPreferences(preferences: Partial<User['preferences']>): Promise<User> {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    const updatedUser = {
      ...currentUser,
      preferences: { ...currentUser.preferences, ...preferences }
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(updatedUser));
    return updatedUser;
  }

  async updateProfile(updates: Partial<Pick<User, 'name' | 'email'>>): Promise<User> {
    const currentUser = this.getCurrentUser();
    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    if (updates.email && updates.email !== currentUser.email) {
      if (!this.isValidEmail(updates.email)) {
        throw new Error('Invalid email format');
      }

      // Check if email is already taken by another user
      if (MOCK_USERS[updates.email] && MOCK_USERS[updates.email].user.id !== currentUser.id) {
        throw new Error('Email already in use');
      }
    }

    const updatedUser = {
      ...currentUser,
      ...updates,
      avatar: updates.name ? updates.name.charAt(0).toUpperCase() : currentUser.avatar
    };

    // Update email in mock database if it changed
    if (updates.email && updates.email !== currentUser.email) {
      delete MOCK_USERS[currentUser.email];
      MOCK_USERS[updates.email] = {
        password: MOCK_USERS[currentUser.email].password,
        user: updatedUser
      };
    } else {
      MOCK_USERS[currentUser.email] = {
        password: MOCK_USERS[currentUser.email].password,
        user: updatedUser
      };
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(updatedUser));
    return updatedUser;
  }
}

export const authService = new AuthService();
