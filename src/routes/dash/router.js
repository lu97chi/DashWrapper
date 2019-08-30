//LayoutService contendra dos funciones(enable,disable) con la propiedad show
// @flow
import { createRouter } from 'rrsx';
import Test from './routes/test';
import Test2 from './routes/test2';
/*path: '/auth/:id',
  Component: Component,
  disableLayout: [SideBar, TopBar],
  protect: () => {
    if (!isAuth) return '/login';
  },
  onEnter: [() => {}],
  onClose: [() => {}]*/

const parentRoute = '/playground';
export const Router = createRouter(
  [
    {
        path: `${parentRoute}/test`,
        component: Test
    },
    {
      path: `${parentRoute}/test2`,
      component: Test2
    }
  ],
  {},
);
