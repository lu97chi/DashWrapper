// @flow
import React, { useState } from 'react';
import { component } from 'rrsx';
import {
  Typography, Modal, Button, message,
} from 'antd';
import { HeaderContainer, ButtonsContainer } from './styledComponents';
import GForm from '../../../../../../components/GenericForm';
import { Caller } from '../../caller';
import ActionCreatorButton from './ActionCreatorButton';

type Props = { buttons: Object, title: String };

const onOk = (loading, setCallingFromOutside) => {
  loading(true);
  setCallingFromOutside(true); // function caller
};

// desabilitar el boton si el formulario esta mal

const makeRequest = async (values, { endPoint, type, params }, domain, setters) => {
  const { setConfirmLoading, setVisible, setCallingFromOutside } = setters;
  const dataCaller = {
    endPoint,
    type,
    data: values,
    params,
  };
  if (values === 'Error') {
    setConfirmLoading(false);
    setCallingFromOutside(false);
  } else {
    const { status } = await Caller(dataCaller, domain);
    if (status >= 200 || status < 300) {
      setConfirmLoading(false);
      setVisible(false);
      setCallingFromOutside(false);
      message.success('Información guardada');
    } else {
      setConfirmLoading(false);
      setCallingFromOutside(false);
      message.error('Ocurrio un error');
    }
  }
};


const ButtonsConfig = (
  { headerButtons, intialConfig },
  setVisible,
  setActiveConfiguration,
  setActiveButtonCaller,
) => {
  const buttons = [];
  headerButtons.forEach((element) => {
    const {
      label, actionCreator, buttonType,
    } = element;
    if (actionCreator) {
      buttons.push(
        <ActionCreatorButton
          element={element}
          setters={{
            setVisible,
            setActiveConfiguration,
            setActiveButtonCaller,
          }}
        />,
      );
    } else {
      buttons.push(
        <Button
          onClick={() => Caller(element, intialConfig.domain)}
          type={buttonType}
        >
          {label}
        </Button>,
      );
    }
  });
  return buttons;
};


const Header = ({ buttons, title }: Props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [callingFromOutside, setCallingFromOutside] = useState(false);
  const [activeConfiguration, setActiveConfiguration] = useState(null);
  const [activeButtonCaller, setActiveButtonCaller] = useState(0);
  const { intialConfig } = buttons;
  return (
    <HeaderContainer>
      <Typography.Title style={{ marginBottom: '0px' }} level={2}>{title}</Typography.Title>
      <ButtonsContainer>
        {ButtonsConfig(buttons, setVisible, setActiveConfiguration, setActiveButtonCaller)}
      </ButtonsContainer>
      <Modal
        title="Title"
        visible={visible}
        onOk={() => onOk(setConfirmLoading, setCallingFromOutside)}
        confirmLoading={confirmLoading}
        onCancel={() => setVisible(false)}
      >
        {
          visible ? (
            <GForm
              handleFromOutside={callingFromOutside}
              formConfig={activeConfiguration}
              showHandler={false}
              externalHandler={(values) => makeRequest(
                values,
                activeButtonCaller,
                intialConfig.domain,
                { setConfirmLoading, setVisible, setCallingFromOutside },
              )}
            />
          ) : null
        }
      </Modal>
    </HeaderContainer>
  );
};

export default component<Props>(Header);
