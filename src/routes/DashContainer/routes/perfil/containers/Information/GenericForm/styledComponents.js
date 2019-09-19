import styled from 'styled-components';


export const ToggleHint = styled.span`
    display: ${({ orientation }) => (orientation === 'top' || orientation === 'bottom' ? 'block' : 'inline')};
    margin-left: ${({ orientation }) => (orientation === 'right' ? '12px' : 0)}
`;
