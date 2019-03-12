import React from 'react';
import { RouterOptions, Config } from './declarations';
import { Switch, Route } from 'react-router-dom';
import { createRouteComponent } from './utils';
import { NotFound } from '.';

export function createRouterFn(
  router: Array<RouterOptions>,
  config?: Config = {}
): Component {
  const Default = config.default;
  const ResultComponent = () => {
    return (
      <Switch>
        {router.map((item, index) => {
          return (
            <Route
              exact={item.exact}
              key={index}
              path={item.path}
              component={createRouteComponent(item)}
            />
          );
        })}
        {Default ? <Route path="*" component={Default} /> : null}
        <Route
          path="*"
          component={config.notFoundComponent || NotFound.get()}
        />
      </Switch>
    );
  };

  return ResultComponent;
}
