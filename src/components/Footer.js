import React from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Image,
  ListGroup,
  Nav,
  Navbar,
  Row,
  Stack,
} from "react-bootstrap";
import Logo from "../img/logo_white.svg";
function Footer() {
  return (
    <footer className="bg-primary">
      <Container>
        <Row className="d-flex flex-column flex-sm-row pt-3 mb-0 pb-0 justify-content-center">
          <p className="align-content-center text-center text-white my-1 mb-0 pb-0 text-opacity-25">
            Copyright {new Date().getFullYear()} &copy; andrewnl.com
            <br />
            <Image
              alt="Andrew Leonberger Portoflio"
              src={Logo}
              width="34"
              height="34"
              className="opacity-25 mt-2 mx-2"
            />
          </p>
          <ul className="list-unstyled d-flex">
            {/* <li class="ms-3"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></li>
        <li class="ms-3"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></li>
        <li class="ms-3"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></li> */}
          </ul>
        </Row>
      </Container>
      <svg
        viewBox="0 0 1000 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="opacity-25 position-relative"
        style={{
          height:"8vh",
          marginTop: -65,
          width:"100%",
        }}
      >
        <path
          fill="#0099ff"
          opacity="0.10"
          d="M0 14C0 14 88.64 17.48 300 50C560 90 814 77 1003 40L1015 68L1018 104H0V14Z"
        ></path>
        <path
          fill="#0099ff"
          opacity="0.3"
          d="M0 45C0 45 271 90.13 500 77C657 68 830 30 1015 14V100H0V45Z"
        ></path>
        <path
          fill="#0099ff"
          d="M0 58C0 58 188.29 90 508 90C798 90 1002 55 1002 55V100H0V58Z"
        ></path>
      </svg>
    </footer>
  );
}
export default Footer;
