import { FC, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import routes from './routes';
import './common/i18n';
import { IAppProps } from './App.types';
import { PaletteMode } from '@mui/material';

const App: FC<IAppProps> = ({ Router = BrowserRouter }) => {
  const [mode] = useState<PaletteMode>('dark');

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
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
