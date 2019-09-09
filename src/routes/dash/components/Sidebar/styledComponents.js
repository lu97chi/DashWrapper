import styled from 'styled-components';
import { Theme } from '../../../playground/contants';

const { primaryBackgroundColor } = Theme;

export const SidebarContainer = styled.div`
    height: 100%;
    transition: .3s ease all;
    background: ${primaryBackgroundColor};
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
    width: ${({ open }) => (open ? '200px' : '80px')}
`;
