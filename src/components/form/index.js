// @flow strict

import * as React from 'react';
import FormController from './controller';
type Props = {
  controller: FormController,
};

function Form({ controller }: Props) {
  return <div>{controller.fields.map(() => '')}</div>;
}

export default Form;
