import { Provider } from 'react-redux';
import { store } from './app/store';
import { AppRouter } from './app/router';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeApplicator } from './components/ui/ThemeApplicator';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ThemeApplicator />
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
