import styled, { keyframes } from 'styled-components';

const scaleX = keyframes`
  from{
    opacity:1;
    transform : scale(0,1)
  }
  to{
    opacity:1;
    transform : scale(1,1)
  }
`;

const translateUpAnimation = keyframes`
  from{
    opacity:1;
    transform : translateY(100%)
  }
  to{
    opacity:1;
    transform : tanslateY(0px)
  }
`;

const translateDownAnimation = keyframes`
  from{
    opacity:1;
    transform : translateY(-100%)
  }
  to{
    opacity:1;
    transform : tanslateY(0px)
  }
`;

export const TranslateDown = styled.div`
  opacity: 0;
  animation: ${translateDownAnimation}
    ${(props) => {
      const { time, delay } = props;
      return `${time || 0.2}s ${delay ||
        0}s cubic-bezier(0.165, 0.84, 0.44, 1);`;
    }};
  animation-fill-mode: forwards;
`;

export const TranslateUp = styled.div`
  opacity: 0;
  animation: ${translateUpAnimation}
    ${(props) => {
      const { time, delay } = props;
      return `${time || 0.2}s ${delay ||
        0}s cubic-bezier(0.165, 0.84, 0.44, 1);`;
    }};
  animation-fill-mode: forwards;
`;

export const ScaleX = styled.div`
  opacity: 0;
  animation: ${scaleX}
    ${(props) => {
      const { time, delay } = props;
      return `${time || 0.2}s ${delay ||
        0}s cubic-bezier(0.165, 0.84, 0.44, 1)`;
    }};
  animation-fill-mode: forwards;
`;
