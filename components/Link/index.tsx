import React, { AnchorHTMLAttributes } from 'react';
import { Component } from "./style";

const Link = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Component {...props} />
);

export default Link;