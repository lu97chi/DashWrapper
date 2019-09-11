// @flow
import React, { useState } from 'react';
import { component } from 'rrsx';
import { Typography, Modal, Button } from 'antd';
import { HeaderContainer, ButtonsContainer } from './styledComponents';
import GForm from '../../../../../../components/GenericForm';

type Props = { buttons: Object, title: String };

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

const ButtonClick = (actions) => actions.forEach(({ handler, value }) => handler(value));

const ButtonsConfig = ({ headerButtons, intialConfig }, setVisible, setActiveConfiguration) => {
  const buttons = [];
  headerButtons.forEach((element) => {
    const { label } = element;
    buttons.push(
      <Button
        type={element.buttonType}
        onClick={() => ButtonClick([
          {
            handler: setVisible,
            value: true,
          },
          {
            handler: setActiveConfiguration,
            value: element.actionCreator.data,
          },
        ])}
      >
        {label}
      </Button>,
    );
  });
  return buttons;
};


const Header = ({ buttons, title }: Props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [callingFromOutside, setCallingFromOutside] = useState(false);
  const [activeConfiguration, setActiveConfiguration] = useState(null);
  return (
    <HeaderContainer>
      <Typography.Title style={{ marginBottom: '0px' }} level={2}>{title}</Typography.Title>
      <ButtonsContainer>
        {ButtonsConfig(buttons, setVisible, setActiveConfiguration)}
        {/* <Button onClick={() => setVisible(true)}>Crear</Button> */}
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
              formConfig={activeConfiguration}
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
