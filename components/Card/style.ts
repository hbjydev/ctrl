import styled from "styled-components";

export const Component = styled.div<{ noPad?: boolean }>`
    padding: ${p => p.noPad ? '0' : '24px'};
    background: #232323;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    border-radius: 4px;
`;