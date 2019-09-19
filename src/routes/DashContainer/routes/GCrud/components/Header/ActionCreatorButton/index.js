import React from 'react';
import { Button } from 'antd';

const ButtonClick = (actions) => actions.forEach(({ handler, value }) => handler(value));


const ActionCreatorButton = ({ element, setters }) => {
  const { label, actionCreator, buttonType } = element;
  const {
    setVisible,
    setActiveConfiguration,
    setActiveButtonCaller,
  } = setters;
  return (
    <Button
      type={buttonType}
      onClick={() => ButtonClick([
        {
          handler: setVisible,
          value: actionCreator,
        },
        {
          handler: setActiveConfiguration,
          value: actionCreator ? actionCreator.data : null,
        },
        {
          handler: setActiveButtonCaller,
          value: element,
        },
      ])}
    >
      {label}
    </Button>
  );
};

export default ActionCreatorButton;
