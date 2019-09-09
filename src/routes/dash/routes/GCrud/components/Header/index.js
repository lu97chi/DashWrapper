// @flow
import React, { useState, useRef } from 'react';
import { component } from 'rrsx';
import { Typography, Modal, Button } from 'antd';
import { HeaderContainer, ButtonsContainer } from './styledComponents';
import GForm from '../../../../../../components/GenericForm';
import { FormConfiguration } from '../../constants';

type Props = { buttons: Object };

const onOk = (loading, visible, setCallingFromOutside) => {
  loading(true);
  setCallingFromOutside(true); // function caller
  setTimeout(() => {
    loading(false);
    visible(false);
    setCallingFromOutside(false); // function closer
  }, 2000);
};

const retriveData = (formData) => {
  formData.validateFields((err, values) => {
    console.log(err, values);
  });
  return formData;
};

const Header = ({ buttons }: Props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [callingFromOutside, setCallingFromOutside] = useState(false);
  const formRef = useRef(null);
  return (
    <HeaderContainer>
      <Typography.Title style={{ marginBottom: '0px' }} level={2}>Tiftulo</Typography.Title>
      <ButtonsContainer>
        {/* {buttons} */}
        <Button onClick={() => setVisible(true)}>Crear</Button>
      </ButtonsContainer>
      <Modal
        title="Title"
        visible={visible}
        onOk={() => onOk(setConfirmLoading, setVisible, setCallingFromOutside)}
        confirmLoading={confirmLoading}
        onCancel={() => setVisible(false)}
      >
        <GForm
          externalRef={formRef}
          handleFromOutside={callingFromOutside}
          formConfig={FormConfiguration}
          showHandler
          externalHandler={(data) => retriveData(data)}
        />
      </Modal>
    </HeaderContainer>
  );
};

export default component<Props>(Header);
