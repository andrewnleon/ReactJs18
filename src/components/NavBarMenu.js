import React from "react";
import { Nav } from "react-bootstrap";

function MainMenu() {
  return (
    <>
      <Nav.Link href="#">Portfolio</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Contact</Nav.Link>
      <Nav.Link href="#">Blog</Nav.Link>
    </>
  );
}

export default MainMenu;
