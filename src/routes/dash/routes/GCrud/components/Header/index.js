// @flow
import React, { useState } from 'react';
import { component } from 'rrsx';
import { Typography, Modal, Button } from 'antd';
import { HeaderContainer, ButtonsContainer } from './styledComponents';
import GForm from '../../../../../../components/GenericForm';
import { FormConfiguration } from '../../constants';

type Props = { buttons: Object };

const onOk = (loading, visible, setCallingFromOutside) => {
  loading(true);
  setCallingFromOutside(true); // function caller
};

const makeRequest = (values, setters) => {
  const { setConfirmLoading, setVisible, setCallingFromOutside } = setters;
  setTimeout(() => {
    setConfirmLoading(false);
    setVisible(false);
    setCallingFromOutside(false);
  }, 2000);
  // function caller for form data
  console.log(values);
};

const Header = ({ buttons }: Props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [callingFromOutside, setCallingFromOutside] = useState(false);
  return (
    <HeaderContainer>
      <Typography.Title style={{ marginBottom: '0px' }} level={2}>Tiftulo</Typography.Title>
      <ButtonsContainer>
        {/* {buttons} accepts components as childres */}
        <Button onClick={() => setVisible(true)}>Crear</Button>
      </ButtonsContainer>
      <Modal
        title="Title"
        visible={visible}
        onOk={() => onOk(setConfirmLoading, setVisible, setCallingFromOutside)}
        confirmLoading={confirmLoading}
        onCancel={() => setVisible(false)}
      >
        {
          visible ? (
            <GForm
              handleFromOutside={callingFromOutside}
              formConfig={FormConfiguration}
              showHandler={false}
              externalHandler={(values) => makeRequest(values,
                { setConfirmLoading, setVisible, setCallingFromOutside })}
            />
          ) : null
        }
      </Modal>
    </HeaderContainer>
  );
};

export default component<Props>(Header);
