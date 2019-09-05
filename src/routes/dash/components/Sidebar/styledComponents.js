import styled from 'styled-components';
import { Theme } from '../../../playground/contants';

const { primaryBackgroundColor, boxshadowBase } = Theme;

export const SidebarContainer = styled.div`
    height: 100%;
    width: 100%;
    transition: .3s ease all;
    background: ${primaryBackgroundColor};
    box-shadow: ${boxshadowBase};
`;
