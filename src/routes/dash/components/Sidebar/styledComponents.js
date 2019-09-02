import styled from 'styled-components';
import { Theme } from '../../../playground/contants';
const { borderColorBase, primaryBackgroundColor } = Theme;

export const SidebarContainer = styled.div`
    height: 100%;
    width: 100%;
    transition: .3s ease all;
    border-right: 1px solid ${borderColorBase};
    background: ${primaryBackgroundColor};
`;
