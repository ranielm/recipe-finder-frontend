import { FC, useMemo, useState } from 'react';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  GlobalStyles,
  PaletteMode,
  Button,
} from '@mui/material';
import { IRequireAuthProps } from '../../components/RequireAuth/RequireAuth.types';

const AppLayout: FC<IRequireAuthProps> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          'input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px transparent inset !important',
            transition: 'background-color 5000s ease-in-out 0s !important',
          },
        }}
      />
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      {children}
    </ThemeProvider>
  );
};

export default AppLayout;
