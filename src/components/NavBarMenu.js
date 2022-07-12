import React from "react";
import { Nav } from "react-bootstrap";

function MainMenu() {
  return (
    <>
      <Nav.Link href="#portfolio"><span>Portfolio</span></Nav.Link>
      <Nav.Link href="#about"><span>About</span></Nav.Link>
      <Nav.Link href="#contact"><span>Contact</span></Nav.Link>
      <Nav.Link href="#blog"><span>Blog</span></Nav.Link>
    </>
  );
}

export default MainMenu;
