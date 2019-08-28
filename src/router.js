//LayoutService contendra dos funciones(enable,disable) con la propiedad show
// @flow
import { createRouter } from 'rrsx';
import SignUp from './routes/sign-up';
import Main from './routes/main';
import Dashboard from './routes/dashboard';
import Dash from './routes/dash';
import Playground from './routes/playground';
/*path: '/auth/:id',
  Component: Component,
  disableLayout: [SideBar, TopBar],
  protect: () => {
    if (!isAuth) return '/login';
  },
  onEnter: [() => {}],
  onClose: [() => {}]*/

export const Router = createRouter(
  [
    {
      path: '/sign-up',
      component: SignUp,
    },
    {
      path: '/dashboard',
      component: Dashboard,
    },
    {
      path: '/dash',
      component: Dash
    },
    {
      path: '/playground',
      component: Dash
    },
    {
      path: '/',
      component: Main,
    }
  ],
  {},
);
