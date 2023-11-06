import { FC, useMemo, useState } from 'react';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  PaletteMode,
} from '@mui/material';
import { IRequireAuthProps } from '../../components/RequireAuth/RequireAuth.types';
import { createGlobalStyle } from 'styled-components';
import { Header, StyledButton } from './AppLayout.styled';

const GlobalStyles = createGlobalStyle`
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    transition: background-color 5000s ease-in-out 0s !important;
  }
`;

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
      <GlobalStyles />
      <Header>
        <StyledButton onClick={toggleTheme} variant="text">
          Toggle Theme
        </StyledButton>
      </Header>
      {children}
    </ThemeProvider>
  );
};

export default AppLayout;
