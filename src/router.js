//LayoutService contendra dos funciones(enable,disable) con la propiedad show
import { createRouter } from './lib/router';

import Root from './routes/root';
import SignUp from './routes/sign-up';
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
      path: '/',
      exact: true,
      component: Root
    },
    {
      path: '/sign-up',
      component: SignUp
    }
  ],
  {}
);
