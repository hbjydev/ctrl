import styled from "styled-components";

export const Component = styled.div<{ noPad?: boolean }>`
  display: flex;
  align-items: center;

  background: #00a0e4;

  padding: ${(p) => (p.noPad ? "0" : "0 12px")};
  height: 52px;
`;

export const NavbarIconButton = styled.button`
  height: 52px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background: none;
  color: white;
`;
