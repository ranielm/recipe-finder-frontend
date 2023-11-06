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
import { useNavigate, useLocation } from 'react-router-dom';
import { RoutesEnum } from '../../common/constants/routes';
import { SnackbarProvider } from 'notistack';

const GlobalStyles = createGlobalStyle`
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
    transition: background-color 5000s ease-in-out 0s !important;
  }
`;

const AppLayout: FC<IRequireAuthProps> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const navigate = useNavigate();
  const location = useLocation();

  const isPathInRoutesEnum = Object.values(RoutesEnum).some(
    (value) => value === location.pathname
  );

  const isNotLoginRoute = location.pathname !== RoutesEnum.LOGIN;

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
    <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Header>
          {isNotLoginRoute && isPathInRoutesEnum && (
            <>
              <StyledButton onClick={() => navigate('/home')} variant="text">
                Home
              </StyledButton>
              <StyledButton
                onClick={() => navigate('/favorites')}
                variant="text"
              >
                Favorites
              </StyledButton>
              <StyledButton
                onClick={() => {
                  navigate('/');
                }}
                variant="text"
              >
                Logout
              </StyledButton>
            </>
          )}
          <StyledButton onClick={toggleTheme} variant="text">
            Toggle Theme
          </StyledButton>
        </Header>
        {children}
      </ThemeProvider>
    </SnackbarProvider>
  );
};

export default AppLayout;
