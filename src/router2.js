//LayoutService contendra dos funciones(enable,disable) con la propiedad show
// @flow
import { createRouter } from 'rrsx';
import Main from './router2m';
/*path: '/auth/:id',
  Component: Component,
  disableLayout: [SideBar, TopBar],
  protect: () => {
    if (!isAuth) return '/login';
  },
  onEnter: [() => {}],
  onClose: [() => {}]*/

const parentRoute = 'playground';
export const Router = createRouter(
  [
    {
      path: `${parentRoute}/test`,
      component: Main,
    },
  ],
  {},
);
