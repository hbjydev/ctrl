import React from "react";
import { Menu } from "react-feather";
import { Base, Navbar, Header, Card } from "../components";
import PadBox from "../components/PadBox";

export default () => (
  <Base>
    <Navbar
      leftButton={{ icon: <Menu width="16px" />, onClick: () => {} }}
      noPad
    >
      <span
        style={{ marginLeft: "12px", fontSize: "12px", fontWeight: "bold" }}
      >
        Ctrl
      </span>
    </Navbar>
    <Header title="Dashboard" overline="Virtual Machines" right={null} />
    <PadBox>
      <Card>
        <span>Hello</span>
      </Card>
    </PadBox>
  </Base>
);
