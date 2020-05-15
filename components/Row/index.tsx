import React, { ReactNode, CSSProperties } from 'react';
import { RowComponent, ColumnComponent } from './style';

export const Row = ({ children, pad = false, style }: { children: ReactNode | ReactNode[]; pad?: boolean; style?: CSSProperties }) => (
    <RowComponent pad={pad} style={style}>
        {children}
    </RowComponent>
);

export const Column = ({ children, style }: { children: ReactNode | ReactNode[]; style?: CSSProperties }) => (
    <ColumnComponent style={ style }>
        {children}
    </ColumnComponent>
);

export default Row;