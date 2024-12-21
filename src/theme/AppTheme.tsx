import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { purpleTheme } from './purple-theme';

type AppThemeProps = {
    children: React.ReactNode,
};

export const AppTheme = ({ children }: AppThemeProps) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
