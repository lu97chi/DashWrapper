import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  color: #221e3a;
  font-size: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 414px;
`;

export const MainText = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  overflow: hidden;
`;

export const Line = styled.div`
  margin: 20px 0;
  margin-top: 30px;
  width: 500px;
  background: #221e3a;
  height: 10px;
  border-radius: 5px;
`;

export const Back = styled.div`
  position: absolute;
  left: 35px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: translateX(-0px) scale(1, 1.2);
  }
  top: -10px;
`;
