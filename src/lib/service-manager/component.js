//@flow

import React from 'react';
import { observer } from 'mobx-react-lite';
import { Component } from 'react';

export function componentWrap<T>(Target: React.Component): (props: T) => {} {
  return observer(Target);
}
