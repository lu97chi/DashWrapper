// @flow
import React from 'react';
import { component } from 'rrsx';
import { Tooltip } from 'antd';
import { MenuItem, IconCustom } from '../../styledComponents';

type Props = { children: any, style: CSSStyleDeclaration, className: string };

const ToolTip = ({
  style, children, className, option, handleClick,
}: Props) => {
  const {
    text,
    icon,
    iconSize,
    iconColor,
  } = option;
  return (
    <Tooltip placement="bottom" title={text}>
      <MenuItem onClick={() => handleClick(option)}>
        <IconCustom iconSize={iconSize} iconColor={iconColor} type={icon} />
      </MenuItem>
    </Tooltip>
  );
};

export default component<Props>(ToolTip);
