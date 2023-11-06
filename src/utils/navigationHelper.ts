import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const redirectToLogin = () => {
  const mainRoute = window.location.href;
  window.location.href = mainRoute;
};
