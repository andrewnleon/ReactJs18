import React, { useEffect, useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { Nav, Navbar, Stack, Container } from "react-bootstrap";
import MainMenu from "./NavBarMenu";
import MobileMenuCanvas from "./NavBarCanvas";
import Logo from "../img/logo_white.svg";
import ScrollspyNav from "react-scrollspy-nav";

function ToolBar() {
  //Mobile menu toggle
  const options = [{ scroll: false, backdrop: true }];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  //Smooth navbar background
  const [color, setColor] = useState(false);
  const [size, setSize] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColor(true);
      setSize(true);
    } else {
      setColor(false);
      setSize(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    // cleanup this component
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <Container fluid>
      <ScrollspyNav
        scrollTargetIds={["portfolio", "section_2", "section_3"]}
        offset={-70}
        scrollDuration="100"
        activeNavClass="active"
        headerBackground="false"
      >
        <Navbar
          id="toolbar"
          fixed="top"
          expand="lg"
          variant="dark"
          className={` ${size ? "p-1" : ""} ${
            color ? "bg-secondary bg-opacity-90" : "bg-secondary bg-opacity-50"
          } `}
          style={{ transition: "all 0.5s ease-out" }}
          role="navigation"
        >
          <Container>
            <Navbar.Brand className="m-0" href="/">
              <img
                alt="Andrew Leonberger Portoflio"
                src={Logo}
                width="50"
                height="50"
                className="d-inline-block align-middle"
              />
            </Navbar.Brand>
            <Stack
              className="me-auto my-auto d-none d-sm-none d-md-none d-lg-block"
              direction="horizontal"
              gap={1}
            >
              <Nav className="text-uppercase" defaultActiveKey="/">
                <MainMenu />
              </Nav>
            </Stack>
            <Stack
              className="my-auto d-none d-sm-none d-md-none d-lg-block"
              direction="horizontal"
              gap={1}
            >
              {/* <Nav className="text-uppercase">
                <Nav.Link className="ps-0 ms-0 mt-1" href="#LinkedIn">
                  <TiSocialLinkedinCircular size={28} />
                </Nav.Link>
                <Nav.Link className="btn btn-secondary my-auto" href="#resume">
                  Resume <BsFillFilePdfFill className="mb-1" size={18} />
                </Nav.Link>
              </Nav> */}
              {/* <Form className="d-flex mr-auto">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="primary">Search</Button>
              </Form> */}
            </Stack>
            <Nav className="d-block d-sm-block d-md-block d-lg-none">
              <Nav.Link
                variant="dark"
                onClick={toggleShow}
                className="me-3 p-0 m-0"
              >
                <GoThreeBars />
              </Nav.Link>
            </Nav>
            {options.map((props, id) => (
              <MobileMenuCanvas
                show={show}
                onHide={handleClose}
                key={id}
                {...props}
              />
            ))}
          </Container>
        </Navbar>
      </ScrollspyNav>
    </Container>
  );
}

export default ToolBar;
