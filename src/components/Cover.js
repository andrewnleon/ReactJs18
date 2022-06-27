import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import CoverParticles from "./CoverParticles";
import { BrowserView } from "react-device-detect";
import styled, { keyframes } from "styled-components";
import { zoomInRight } from "react-animations";

function Cover() {
  const bounceAnimation = keyframes`${zoomInRight}`;
  const BounceIn = styled.div`
    animation: 1.2s ${bounceAnimation};
  `;
  return (
    <>
      <Container
        fluid
        className="cover-container d-flex w-100 h-100 p-0 mx-auto flex-column"
      >
        <Row className="mb-auto"></Row>
        <Container>
          <BounceIn>
            <Col lg={6} className="offset-lg-6 bg-opacity-90 bg-secondary rounded rounded-3 p-4 text-white text-lg-start text-sm-center text-md-center text-center">
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
        </Container>
        
        <Row className="mt-auto text-white-50 text-center">
          {/* <p>
            <BsArrowBarDown size={31} />
          </p> */}
        </Row>
      </Container>
      <BrowserView>
        <Col className="d-none d-md-block d-lg-block">
          <CoverParticles />
        </Col>
      </BrowserView>
    </>
  );
}

export default Cover;
