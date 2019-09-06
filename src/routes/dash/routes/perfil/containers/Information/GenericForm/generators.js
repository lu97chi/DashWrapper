import React from 'react';
import {
  Checkbox, Row, Col, Radio, Switch, Select, Upload, Button, Icon,
} from 'antd';
import { ToggleHint } from './styledComponents';

const { Option } = Select;

export const CheckboxGen = (fieldOptions) => (
  <Checkbox.Group style={{ width: '100%' }}>
    <Row>
      {fieldOptions.map((option) => (
        <Col span={option.cols}>
          <Checkbox value={option.value}>{option.label}</Checkbox>
        </Col>
      ))}
    </Row>
  </Checkbox.Group>
);

export const RadioButtonGen = (fieldOptions) => (
  <Radio.Group>
    {
            fieldOptions.map((option) => (
              <Radio.Button value={option.value}>
                {option.label}
              </Radio.Button>
            ))
        }
  </Radio.Group>
);

export const RadioGen = (fieldOptions) => (
  <Radio.Group>
    {
        fieldOptions.map((option) => (
          <Radio value={option.value}>{option.value}</Radio>
        ))
    }
  </Radio.Group>
);

export const SwitchGen = (fieldOptions) => {
  const { hintHorientation, hint } = fieldOptions;
  return (
    <>
      {hintHorientation === 'top' || hintHorientation === 'left'
        ? <ToggleHint orientation={hintHorientation}>{hint}</ToggleHint> : null}
      <Switch style={{
        marginLeft: hintHorientation === 'left' ? '12px' : 0,
        marginRight: hintHorientation === 'right' ? '12px' : 0,
      }}
      />
      {hintHorientation === 'bottom' || hintHorientation === 'right'
        ? <ToggleHint orientation={hintHorientation}>{hint}</ToggleHint> : null}
    </>
  );
};

export const MultipleGen = (fieldOptions, type) => (
  <Select mode={type}>
    {
        fieldOptions.map(({ label, value }) => <Option value={value}>{label}</Option>)
    }
  </Select>
);

const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess('OK');
  }, 500);
};

export const UploadGen = () => (
  <Upload accept=".png" customRequest={dummyRequest}>
    <Button>
      <Icon type="upload" />
      {' '}
        Subir
    </Button>
  </Upload>
);

export const UploadDragGen = () => (
  <Upload.Dragger customRequest={dummyRequest} accept=".png">
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
  </Upload.Dragger>
);
