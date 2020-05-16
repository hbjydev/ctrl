import React, { ReactNode, MouseEvent } from "react";
import { Component, NavbarIconButton } from "./style";

export interface INavbarButton {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  icon?: ReactNode | ReactNode[];
}

const Navbar = ({
  children,
  icons,
  leftButton,
  noPad,
}: {
  children?: ReactNode | ReactNode[];
  icons?: INavbarButton[];
  leftButton?: INavbarButton;
  noPad?: boolean;
}) => (
  <Component noPad={noPad}>
    {leftButton ? (
      <NavbarIconButton onClick={leftButton.onClick}>
        {leftButton.icon}
      </NavbarIconButton>
    ) : null}
    {children}
  </Component>
);

export default Navbar;
