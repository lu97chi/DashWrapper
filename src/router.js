// LayoutService contendra dos funciones(enable,disable) con la propiedad show
// @flow
import { createRouter } from 'rrsx';
import SignUp from './routes/sign-up';
import Main from './routes/main';
import DashContainer from './routes/DashContainer';
/* path: '/auth/:id',
  Component: Component,
  disableLayout: [SideBar, TopBar],
  protect: () => {
    if (!isAuth) return '/login';
  },
  onEnter: [() => {}],
  onClose: [() => {}] */

export const Router = createRouter(
  [
    {
      path: '/sign-up',
      component: SignUp,
    },
    {
      path: '/playground',
      component: DashContainer,
    },
    {
      path: '/',
      component: Main,
    },
  ],
  {},
);
