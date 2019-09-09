import styled from 'styled-components';
import { Theme } from '../../../../playground/contants';

const {
  primaryHoverColor, secondaryBackgroundColor, textColorLight, textColorLightHover,
} = Theme;

export const SlideContainer = styled.div`
    transition: .3s ease all;
    background: ${secondaryBackgroundColor};
    height: ${({ open }) => (open ? '50px' : '0px')}; 
    overflow: hidden;
    cursor: pointer;
    &:hover{
        color: ${primaryHoverColor};
    }
`;

export const SlideBody = styled.div`
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    height: 100%;
    display: flex;
    padding-left: 20%;
    align-items: center;
`;

export const TextSlideOpen = styled.span`
    color: ${textColorLight};
    transition: .3s ease all;
    &:hover{
        color: ${textColorLightHover}
    }
`;
