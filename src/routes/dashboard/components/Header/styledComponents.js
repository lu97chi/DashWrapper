import styled from 'styled-components';
import { Icon } from 'antd';

const fullHeight = '64px';

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
        background: #E8E8E8;
    }
`;

export const Card = styled.div`
    border-bottom: 1px solid #E8E8E8;
    height: ${fullHeight};
`;
