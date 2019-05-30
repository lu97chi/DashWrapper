//@flow
import React, { CSSProperties } from 'react';
import { observable, action, computed } from 'mobx';
import { Config } from './types';

export default class FormController {
  @observable
  form = {};

  constructor({ fields, bind, joiValidation }: Config) {
    this.fields = fields;
    this.bind = bind;
    this.joiValidation = joiValidation;
  }

  @action
  check() {}

  @computed
  get computedProp() {}
}
