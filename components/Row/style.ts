import styled from "styled-components";

export const RowComponent = styled.div<{ pad?: boolean }>`
    display: flex;
    width: 100%;

    ${p => p.pad ? 'justify-content: space-between;' : null}
`;

export const ColumnComponent = styled.div``;