import styled from 'styled-components';
import { Icon } from 'antd';
import { Theme } from '../../../playground/contants';

const fullHeight = '64px';
const { borderColorBase, boxshadowBase } = Theme;

export const IconA = styled(Icon)`
    font-size: 24px;
    transition: .3s ease all;
    transform: ${({open}) => open ? 'rotate(0deg)' : 'rotate(180deg)'};
`;

export const MenuItem = styled.div`
    transition: .3s ease all;
    cursor: pointer;
    padding: 4px 14px;
    width: 100%;
    height: ${fullHeight};
    display: flex;
    align-items: center;
    &:hover{ 
        background: ${borderColorBase};
    }
`;

export const Card = styled.div`
    height: ${fullHeight};
    background: #ffffff;
    box-shadow: ${boxshadowBase};
`;

export const IconCustom = styled(Icon)`
    font-size: ${({iconSize}) => iconSize} !important;
    color: ${({iconColor}) => iconColor} !important;
    margin: auto;
`;

export const Badge = styled.div`
    padding: 0px 8px;
    position: absolute;
    top: 10%;
    right: 10%;
    background: ${({badgeColor}) => badgeColor};
    border-radius: 10px;
    color: #ffffff;
    transition: .3s ease all;
`;
