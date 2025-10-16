import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface LoadingState {
  [key: string]: boolean;
}

export interface ModalState {
  isOpen: boolean;
  type?: string;
  props?: Record<string, any>;
}

export interface ToastState {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

interface UiState {
  loading: LoadingState;
  modal: ModalState;
  toasts: ToastState[];
  sidebar: {
    isOpen: boolean;
    isCollapsed: boolean;
  };
  theme: 'light' | 'dark' | 'system';
}

const initialState: UiState = {
  loading: {},
  modal: {
    isOpen: false,
  },
  toasts: [],
  sidebar: {
    isOpen: false,
    isCollapsed: false,
  },
  theme: 'system',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<{ key: string; loading: boolean }>) => {
      const { key, loading } = action.payload;
      state.loading[key] = loading;
    },

    openModal: (state, action: PayloadAction<{ type: string; props?: Record<string, any> }>) => {
      state.modal = {
        isOpen: true,
        type: action.payload.type,
        props: action.payload.props,
      };
    },

    closeModal: (state) => {
      state.modal = {
        isOpen: false,
      };
    },

    addToast: (state, action: PayloadAction<Omit<ToastState, 'id'>>) => {
      const toast: ToastState = {
        id: Date.now().toString(),
        ...action.payload,
      };
      state.toasts.push(toast);
    },

    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(toast => toast.id !== action.payload);
    },

    toggleSidebar: (state) => {
      state.sidebar.isOpen = !state.sidebar.isOpen;
    },

    collapseSidebar: (state, action: PayloadAction<boolean>) => {
      state.sidebar.isCollapsed = action.payload;
    },

    setTheme: (state, action: PayloadAction<'light' | 'dark' | 'system'>) => {
      state.theme = action.payload;
    },
  },
});

export const {
  setLoading,
  openModal,
  closeModal,
  addToast,
  removeToast,
  toggleSidebar,
  collapseSidebar,
  setTheme,
} = uiSlice.actions;

export default uiSlice.reducer;
