// @flow
import React from 'react';
import { component } from 'rrsx';
import { SlideContainer, SlideBody, TextSlideOpen } from './styledComponents';

type Props = { item: Object, open: Boolean, paddingleft: String };

const SlideOpen = ({ open, paddingleft, item }: Props) => {
  const {
    name,
  } = item;
  return (
    <SlideContainer paddingleft={paddingleft} open={open}>
      <SlideBody>
        <TextSlideOpen>{name}</TextSlideOpen>
      </SlideBody>
    </SlideContainer>
  );
};

export default component<Props>(SlideOpen);
