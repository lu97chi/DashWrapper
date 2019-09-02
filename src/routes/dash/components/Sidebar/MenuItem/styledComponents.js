import styled from 'styled-components';
import { Icon } from 'antd';
import { Theme } from '../../../../playground/contants';

const { borderColorBase, textColorLight, textColorLightHover } = Theme;
export const MenuItemContainer = styled.div`
    transition: .3s ease all;
    display: flex;
    align-items: center;
    justify-content: center;
    background: red;
    width: 100%;
    color: ${textColorLight}
    cursor: pointer;
    &:hover {
        color: ${textColorLightHover};
    }
`;

export const TextContainer = styled.div`
    width: 100%;
    margin-top: 12px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const IconA = styled(Icon)`
    transition: .3s ease all;
    opacity: ${({open}) => open ? 1 : 0};
    visibility: ${({open}) => open ? 'block' : 'hidden'};
    transform: ${({nestedOpen}) => nestedOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    padding-right: 12px;
    padding-left: 12px;
`;


export const AText = styled.span`
    transition: .3s ease all;
    opacity: ${({open}) => open ? 1 : 0};
    margin-left: 12px;
    font-size: ${({fontsize}) => fontsize};
`;


export const NestedContainer = styled.div`
    border-top: ${({open}) => open ? `1px solid ${borderColorBase}` : `0px solid ${borderColorBase}`} ;
    border-bottom: ${({open}) => open ? `1px solid ${borderColorBase}` : `0px solid ${borderColorBase}`};
`;
