import styled, { css } from "styled-components";

const sharedStyles = css`
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0 20px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    background: #00A0E4;
    justify-content: space-around;
    border-radius: 2px;
`;

export const Link = styled.a`
    ${sharedStyles}
    text-decoration: none;
`;
export const Button = styled.button`
    ${sharedStyles}
`;