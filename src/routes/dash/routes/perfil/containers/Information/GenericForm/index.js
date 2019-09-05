/* eslint-disable react/prop-types */
// @flow
import React from 'react';
import { component } from 'rrsx';
import {
  Form, Input, DatePicker, TimePicker, Row, Col,
} from 'antd';

const { MonthPicker, RangePicker } = DatePicker;

// type Props = { data:Array<any>, formConfig:any, getFieldDecorator: Function };

const injectRules = (validations = []) => validations.map(({ type, validation, errorMessage }) => (
  { [type]: validation, message: errorMessage }));

const getTagType = (field) => {
  const { type } = field;
  switch (type) {
    case 'string':
      return <Input {...field} />;
    case 'password':
      return <Input.Password {...field} />;
    case 'range':
      return <RangePicker style={{ width: '100%' }} {...field} />;
    case 'month':
      return <MonthPicker style={{ width: '100%' }} {...field} />;
    case 'time':
      return <TimePicker style={{ width: '100%' }} {...field} />;
    case 'date':
      return <DatePicker style={{ width: '100%' }} {...field} />;
    default:
      return <Input {...field} />;
  }
};

const formGenerator = (fielDecorator, elements) => {
  const payload = [];
  elements.forEach((field) => {
    payload.push(
      <Col xs={field.cols}>
        <Form.Item
          label={field.label}
          key={field.label}
        >
          {fielDecorator(field.label, {
            rules: injectRules(field.extraValidations),
          })(getTagType(field))}
        </Form.Item>
      </Col>,
    );
  });
  return payload;
};

const BasicProfile = ({ formConfig, form }) => {
  const { getFieldDecorator } = form;
  return (
    <Form>
      <Row gutter={32}>
        {formGenerator(getFieldDecorator, formConfig)}
      </Row>
    </Form>
  );
};


export default Form.create()(component(BasicProfile));
