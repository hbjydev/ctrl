import React, { ReactNode, CSSProperties } from 'react';
import { Component } from './style';

const Layout = ({ children, style }: { children?: ReactNode | ReactNode[]; style?: CSSProperties }) => {
    return (
        <Component style={style}>
            {children}
        </Component>
    );
};

export default Layout;