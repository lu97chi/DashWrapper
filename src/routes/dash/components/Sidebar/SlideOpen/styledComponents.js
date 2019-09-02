import styled from 'styled-components';
import { Theme } from '../../../../playground/contants';

const { primaryHoverColor, secondaryBackgroundColor, textColorLight, textColorLightHover } = Theme;

export const SlideContainer = styled.div`
    transition: .3s ease all;
    background: ${secondaryBackgroundColor};
    height: ${({open}) => open ? '50px' : '0px'}; 
    overflow: hidden;
    padding-left: ${({paddingleft}) => `calc(28px + (${paddingleft}) * 2)`};
    cursor: pointer;
    &:hover{
        color: ${primaryHoverColor};
    }
`;

export const SlideBody = styled.div`
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    
`;

export const TextSlideOpen = styled.span`
    color: ${textColorLight};
    transition: .3s ease all;
    &:hover{
        color: ${textColorLightHover}
    }
`;

