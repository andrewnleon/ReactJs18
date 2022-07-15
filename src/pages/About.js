import React from "react";
import { Col, Container } from "react-bootstrap";
function About() {
  return (
    <>
      <Col id="about" className="scroll-anchor bg-white">
        &nbsp;
      </Col>
      <section className="bg-white-secondary pb-0 text-center">
        <Container>
          <Col className="mb-3 px-3">
            <h2 className="display-5">Education</h2>
            <p className="lead">
              Bachelor of Fine Arts On December 10th, 2010 I acquired a
              Bachelors degree in Fine Arts for Web Design &amp; Interactive
              Media at The Art Institute of Washington.
            </p>
          </Col>
          <Col className="bg-dark shadow-sm mx-auto d-block p-5 rounded-top"></Col>
        </Container>
      </section>
    </>
  );
}

export default About;
