import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { zoomInRight, fadeIn } from "react-animations";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { FaGulp, FaLaptopCode } from "react-icons/fa";
import { SiReact, SiCsharp, SiGulp  } from "react-icons/si";
import { DiCss3, DiGulp } from "react-icons/di";
import CoverImage from "../img/drewcity_metaverse.png";

const fadeAnimation = keyframes`${fadeIn}`;
const FadeEffect = styled.div`
  animation: 1.2s ${fadeAnimation};
`;

const bounceAnimation = keyframes`${zoomInRight}`;
const BounceIn = styled.div`
  animation: 1.2s ${bounceAnimation};
`;

function Cover() {
  return (
    <Container
      style={{
        backgroundImage: `url(${CoverImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
      id="cover-container"
      className="d-flex flex-column p-0"
      fluid
    >
      <Container className="d-flex flex-column h-100">
        <Row className="masthead mb-auto">
          <Col className="inner"></Col>
        </Row>
        <ParallaxProvider>
          <Row role="main" id="cover-banner" className="inner cover">
            <Parallax speed={-12} easing={"easeIn"}>
              <BounceIn>
                <Col
                  sm={8}
                  md={8}
                  lg={5}
                  xl={4}
                  className="mx-auto bg bg-secondary bg-opacity-95 rounded rounded-3 py-4 px-3 text-white text-center"
                >
                  <h1 className="font-secondary fw-bold">Andrew Leonberger</h1>
                  <hr className="spacer mx-5 px-5 my-3 text-opacity-90 text-primary" />
                  <p className="lead text-light">
                    Specializing in UI/UX/DX development
                    <br />
                    for modern web applications
                  </p>
                  <Button
                    size="lg"
                    variant="outline-secondary bg-primary"
                    className="text-uppercase p-0 bg-opacity-25"
                    href="#"
                  >
                    <span>
                      Discover
                      <FadeEffect>
                        <FaLaptopCode className="mx-2 mt-n1 btn-icon" />
                      </FadeEffect>
                    </span>
                    <Col className="wave"></Col>
                  </Button>
                  <Row className="gap-0 mt-3 text-primary opacity-25 col-6 mx-auto">
                    <Col lg={3} className="text-center">
                      <SiCsharp className="fs-2" />
                    </Col>
                    <Col lg={3} className="text-center">
                      <SiReact className="fs-2" />
                    </Col>
                    <Col lg={3} className="text-center">
                      <DiCss3 className="fs-2" />
                    </Col>
                    <Col lg={3} className="text-center">
                      <SiGulp className="fs-2" />
                    </Col> 
                  </Row>
                </Col>
              </BounceIn>
            </Parallax>
          </Row>
        </ParallaxProvider>
        <Row className="mastfoot mt-auto">
          <Col className="inner"></Col>
        </Row>
      </Container>
      <svg
        viewBox="0 0 1000 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          opacity="0.10"
          d="M0 14C0 14 88.64 17.48 300 50C560 90 814 77 1003 40L1015 68L1018 104H0V14Z"
        ></path>
        <path
          fill="white"
          opacity="0.3"
          d="M0 45C0 45 271 90.13 500 77C657 68 830 30 1015 14V100H0V45Z"
        ></path>
        <path
          fill="white"
          d="M0 58C0 58 188.29 90 508 90C798 90 1002 55 1002 55V100H0V58Z"
        ></path>
      </svg>
    </Container>
  );
}

export default Cover;
