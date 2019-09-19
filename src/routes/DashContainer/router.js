// LayoutService contendra dos funciones(enable,disable) con la propiedad show
// @flow
import { createRouter } from 'rrsx';
import Test from './routes/test';
import Test2 from './routes/test2';
import Profile from './routes/perfil';
import User from './routes/user';
import GCrud from './routes/GCrudContainer';
/* path: '/auth/:id',
  Component: Component,
  disableLayout: [SideBar, TopBar],
  protect: () => {
    if (!isAuth) return '/login';
  },
  onEnter: [() => {}],
  onClose: [() => {}] */

const parentRoute = '/playground';
export const Router = createRouter(
  [
    {
      path: `${parentRoute}/test`,
      component: Test,
    },
    {
      path: `${parentRoute}/test2`,
      component: Test2,
    },
    {
      path: `${parentRoute}/perfil2`,
      component: Profile,
    },
    {
      path: `${parentRoute}/perfil`,
      component: User,
    },
    {
      path: `${parentRoute}/GCrud`,
      component: GCrud,
    },
  ],
  {
    default: {
      redirect: `${parentRoute}/test`,
    },
  },
);
