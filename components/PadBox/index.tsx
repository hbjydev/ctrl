import { Component } from "./style";
import React, { ReactNode } from "react";

const PadBox = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <Component children={children} />
);

export default PadBox;
