import { Component } from "./style";
import { ReactNode } from "react";

const InputGroup = ({ children }: { children?: ReactNode | ReactNode[] }) => (
    <Component>{ children }</Component>
);

export default InputGroup;