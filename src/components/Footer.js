import React from "react";
import { Col, Container } from "react-bootstrap";
function Footer() {
  return (
    <>
      <footer className="bg-primary text-secondary d-flex col-lg-12 text-center position-relative">
        <Container>
          <Col className="my-1 p-2">
            Copyright {new Date().getFullYear()} &copy; andrewnl.com
          </Col>
        </Container>
      </footer>
    </>
  );
}
export default Footer;
