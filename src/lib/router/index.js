import { createRouterFn } from './create-router';
import { RouterOptions } from './declarations';
import NotFoundTemplate from './not-found-template';
import nav from './navigator-lib';

export const createRouter = createRouterFn;
export interface Router extends RouterOptions {}
export const NotFound = new NotFoundTemplate();
export const navigator = nav;
