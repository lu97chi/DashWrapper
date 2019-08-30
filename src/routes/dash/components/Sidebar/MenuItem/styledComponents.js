import styled from 'styled-components';
import { Icon } from 'antd';

export const MenuItemContainer = styled.div`
    border: 1px solid rebeccapurple;
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

`;


export const IconA = styled(Icon)`
    transition: .3s ease all;
    opacity: ${({open}) => open ? 1 : 0};
    visibility: ${({open}) => open ? 'block' : 'hidden'};
`;


export const AText = styled.span`
    transition: .3s ease all;
    opacity: ${({open}) => open ? 1 : 0};
`;
