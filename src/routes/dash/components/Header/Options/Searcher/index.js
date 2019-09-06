// @flow
import React, { useState, useRef, useEffect } from 'react';
import { component } from 'rrsx';
import { InputA } from './styledComponents';
import { MenuItem, IconCustom } from '../../styledComponents';

type Props = { children: any, style: CSSStyleDeclaration, className: string, item: ItemType};

const clickOutside = (ref, handler) => {
  function handleClick(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      handler(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
};

const Searcher = ({
  style, children, className, option,
}: Props) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const outsideRef = useRef(null);
  clickOutside(outsideRef, setSearchOpen);
  const {
    text,
    icon,
  } = option;
  return (
    <div ref={outsideRef}>
      <InputA open={searchOpen} placeholder="Buscar..." />
      <MenuItem onClick={() => setSearchOpen(!searchOpen)}>
        <IconCustom type={icon} />
      </MenuItem>
    </div>
  );
};

export default component<Props>(Searcher);
