import styled from 'styled-components';
import { Icon } from 'antd';
import { Theme } from '../../../../playground/contants';

const { textColorLight, textColorLightHover } = Theme;
export const MenuItemContainer = styled.div`
    transition: .3s ease all;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${textColorLight};
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
    margin-left: 24px;
`;


export const IconA = styled(Icon)`
    transition: .3s ease all;
    opacity: ${({ open }) => (open ? 1 : 0)};
    visibility: ${({ open }) => (open ? 'block' : 'hidden')};
    transform: ${({ nestedOpen }) => (nestedOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    padding-right: 12px;
    padding-left: 12px;
`;


export const AText = styled.span`
    transition: .3s ease all;
    opacity: ${({ open }) => (open ? 1 : 0)};
    margin-left: 12px;
    font-size: ${({ fontsize }) => fontsize};
`;


export const NestedContainer = styled.div`
box-shadow: -12px 0px 15px 0px rgba(0,0,0,1);

`;
