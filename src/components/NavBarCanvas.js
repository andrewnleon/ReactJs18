import React, { useState } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import MainMenu from "./NavBarMenu";

function NavBarCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Offcanvas
        className="bg-dark navbar-dark"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <img
              alt="Portolfio"
              src={`/img/logo_white.svg`}
              width="64"
              height="64"
              className="d-inline-block align-middle"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="me-auto text-uppercase">
            <MainMenu />
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavBarCanvas;