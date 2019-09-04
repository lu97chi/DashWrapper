/* eslint-disable react/prop-types */
// @flow
import React from 'react';
import { component } from 'rrsx';
import { Form, Input } from 'antd';

type Props = { data:Array<any>, formConfig:any, getFieldDecorator: Function };

const injectRules = (validations) => validations.map(({ type, validation, errorMessage }) => (
  { [type]: validation, message: errorMessage }));
const formGenerator = (fielDecorator, elements) => {
  const payload = [];
  elements.forEach((field) => {
    payload.push(
      <Form.Item label={field.label}>
        {fielDecorator(field.label, {
          rules: injectRules(field.extraValidations),
        })(<Input placeholder={field.placeholder} />)}
      </Form.Item>,
    );
  });
  return payload;
};

const BasicProfile = ({ formConfig, form }) => {
  const { getFieldDecorator } = form;
  return (
    <Form>
      {formGenerator(getFieldDecorator, formConfig)}
    </Form>
  );
};


export default Form.create()(component<Props>(BasicProfile));
