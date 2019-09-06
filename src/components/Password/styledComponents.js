import styled from 'styled-components';

export const PasswordC = styled.input`
    padding: 4px 11px;
    color: rgba(0,0,0,0.65);
    background: #fff;
    border: 1px solid #d9d9d9;
    transition: .3s ease all;
    border-radius: 4px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin:0;
    box-sizing:border-box;
    font-feature-settings: "tnum", "tnum";
    position: relative;
    display: inline-block;
    outline: none;
    &:hover{
        border: 1px solid #40a9ff;
    }
    &:focus{
        box-shadow: 0px 0px 1px 2px #d1e9ff;
    }
`;
