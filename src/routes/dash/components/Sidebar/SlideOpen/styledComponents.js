import styled from 'styled-components';

export const SlideContainer = styled.div`
    transition: .3s ease all;
    background: yellow;
    height: ${({open}) => open ? '50px' : '0px'}; 
    overflow: hidden;
    padding-left: ${({paddingleft}) => `calc(12px + ${paddingleft})`};
    cursor: pointer;
    &:hover{
        color: red;
    }
`;

export const SlideBody = styled.div`
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    
`;
