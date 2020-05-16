import React, { ReactNode } from "react";
import { Component, TitleBox } from "./style";

const Header = ({
  title,
  overline,
  right,
}: {
  title?: string;
  overline?: string;
  right?: ReactNode | ReactNode[];
}) => (
  <Component>
    <TitleBox>
      {overline ? <h3>{overline}</h3> : null}
      <h1>{title}</h1>
    </TitleBox>
    <div>{right}</div>
  </Component>
);

export default Header;
