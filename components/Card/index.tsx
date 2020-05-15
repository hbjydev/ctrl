import React, { ReactNode, CSSProperties } from "react";
import { Component } from "./style";

const Card = ({ noPad = false, children, maxWidth = undefined, maxHeight = undefined, styles }: {
    noPad?: boolean;
    children?: ReactNode | ReactNode[];
    maxWidth?: string;
    maxHeight?: string;
    styles?: CSSProperties;
}) => {
    return (
        <Component noPad={noPad} style={{ maxWidth, maxHeight, ...styles }}>
            { children }
        </Component>
    );
};

export default Card;