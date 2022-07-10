import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { zoomInRight } from "react-animations";
// import CoverParticles from "./CoverParticles";
// import { BrowserView } from "react-device-detect";
// import Particles from "react-tsparticles";
// import { Parallax } from "react-parallax";

const coverBg = require('../img/drewcity_metaverse.png');
const bounceAnimation = keyframes`${zoomInRight}`;
const BounceIn = styled.div`
  animation: 1.2s ${bounceAnimation};
`;
function Cover() {
  return (
    <Container
      style={{
        backgroundImage: `url(${coverBg})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
      id="cover-container"
      className="d-flex mx-auto flex-column"
      fluid
    >
      <Row className="masthead mb-auto">
        <Col className="inner"></Col>
      </Row>
      <Row role="main" className="inner cover">
        <BounceIn>
          <Col
            sm={12}
            md={12}
            lg={4}
            className="offset-lg-5 bg-opacity-90 bg-secondary rounded rounded-3 p-4 text-white text-lg-start text-sm-center text-md-center text-center"
          >
            <h1 className="font-secondary fw-bold">Andrew Leonberger</h1>
            <p className="lead text-light">
              Front end engineer &amp; designer specializing in user interface
              development for modern web applications
            </p>
            <Button
              size="lg"
              variant="outline-primary"
              className="btn text-uppercase"
              href="#"
            >
              Discover
            </Button>
          </Col>
        </BounceIn>
      </Row>
      <Row className="mastfoot mt-auto">
        <Col className="inner"></Col>
      </Row>
    </Container>
  );
}

export default Cover;
