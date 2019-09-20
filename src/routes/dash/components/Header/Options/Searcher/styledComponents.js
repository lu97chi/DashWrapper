import styled from 'styled-components';
import { Input } from 'antd';

export const InputA = styled(Input)`
    position: absolute !important;
    transition: .3s ease all;
    opacity: ${({ open }) => (open ? '1' : '0')} !important;
    width: ${({ open }) => (open ? '250px' : '1px')} !important;
    left: -255px;
    top: 25%;
`;
