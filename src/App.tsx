import { ComponentType, ElementType, FC } from 'react';
import {
  BrowserRouter,
  BrowserRouterProps,
  Route,
  Routes,
} from 'react-router-dom';
import routes from './routes';
import './common/i18n';

interface IAppProps {
  Router?: ComponentType<BrowserRouterProps> | ElementType;
}

const App: FC<IAppProps> = ({ Router = BrowserRouter }) => {
  return (
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
  );
};

export default App;
