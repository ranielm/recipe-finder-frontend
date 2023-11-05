import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import './common/i18n';
import { IAppProps } from './App.types';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AppLayout from './containers/AppLayout/AppLayout';

const App: FC<IAppProps> = ({ Router = BrowserRouter }) => {
  return (
    <AppLayout>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AppLayout>
  );
};

export default App;
