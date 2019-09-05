import styled from 'styled-components';
import { Col } from 'antd';

export const AnimatedCol = styled(Col)`
    transition: .3s ease all;
    height: 100%;
`;

export const Section = styled.div`
    height: 100%;
    overflow-y: auto;
    background: red;
`;

export const AnimatedSidebar = styled.div`
    width: ${({ open }) => (open ? '140px' : '80px')};
    height: 100%;
    transition: .3s ease all;
`;

export const RowContianer = styled.div`
    display: flex;
`;

export const AnimatedHeader = styled.div`
    
`;
