import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import CoverParticles from "./CoverParticles";
import { BrowserView } from "react-device-detect";
import styled, { keyframes } from "styled-components";
import { zoomInRight } from "react-animations";
import "@fontsource/space-grotesk";

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
        <Row lg={12} className="d-flex justify-content-center">
            <BounceIn className="offset-md-0 offset-lg-3 p-5 p-lg-0 mt-5">
              <Col
                sm={12}
                md={6}
                lg={4}
                className="bg-opacity-90 bg-secondary rounded rounded-3 p-4 text-white  text-lg-start mx-auto text-sm-center text-md-center text-center"
              >
                <h1 className="font-secondary fw-bold">Andrew Leonberger</h1>
                <p className="lead text-light">
                  Front end engineer &amp; designer specializing in user
                  interface development for modern web applications
                </p>
                <Row>
                  <Col lg={12}>
                    <Button
                      size="lg"
                      variant="outline-primary"
                      className="btn text-uppercase"
                      href="#"
                    >
                      Discover
                    </Button>
                  </Col>
                </Row>
              </Col>
            </BounceIn>
        </Row>
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
