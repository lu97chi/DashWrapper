// @flow
import React from 'react';
import { component } from 'rrsx';
import {
  Container, MainText, Line, Back,
} from './StyledComponents';
import { NOT_FOUND } from './const';
import { TranslateUp, TranslateDown, ScaleX } from '../animations';

function Page404() {
  return (
    <Container>
      <Back>{'<'}</Back>

      <MainText>
        <TranslateUp delay={0.3} time={0.5}>
          {NOT_FOUND}
        </TranslateUp>
      </MainText>
      <ScaleX time={0.3}>
        <Line />
      </ScaleX>

      <MainText writeLine>
        <TranslateDown delay={0.6} time={0.5}>
          {404}
        </TranslateDown>
      </MainText>
    </Container>
  );
}

export default component(Page404);
