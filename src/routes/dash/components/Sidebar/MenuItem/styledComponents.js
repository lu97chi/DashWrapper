import styled from 'styled-components';
import { Icon } from 'antd';

export const MenuItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 12px;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
        color: red;
    }
`;

export const TextContainer = styled.div`
    text-align: center;
    background: yellow;
`;


export const IconA = styled(Icon)`
    transition: .3s ease all;
    opacity: ${({open}) => open ? 1 : 0};
    visibility: ${({open}) => open ? 'block' : 'hidden'};
    transform: ${({nestedOpen}) => nestedOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;


export const AText = styled.span`
    transition: .3s ease all;
    opacity: ${({open}) => open ? 1 : 0};
    font-size: ${({fontsize}) => fontsize};
`;


export const NestedContainer = styled.div`
    border-top: ${({open}) => open ? '1px solid red' : '0px solid red'} ;
    border-bottom: ${({open}) => open ? '1px solid red' : '0px solid red'};
`;
