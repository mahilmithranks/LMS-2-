import { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeApplicator: React.FC = () => {
  const { actualTheme } = useTheme();

  useEffect(() => {
    // Apply theme to document element
    document.documentElement.setAttribute('data-theme', actualTheme);

    // Also update the class for any additional styling
    if (actualTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [actualTheme]);

  return null; // This component doesn't render anything
};
