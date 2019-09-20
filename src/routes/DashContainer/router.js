// LayoutService contendra dos funciones(enable,disable) con la propiedad show
// @flow
import { createRouter } from 'rrsx';
import Test from './routes/test';
import Profile from './routes/perfil';
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
      path: `${parentRoute}/perfil2`,
      component: Profile,
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
