import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export function redirectToLogin() {
  history.push('/');
}
