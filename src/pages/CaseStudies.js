import React from "react";
import { Col, Container } from "react-bootstrap";
function CaseStudies() {
  return (
    <>
      <Col id="casestudies" className="scroll-anchor bg-white">
        &nbsp;
      </Col>
      <section className="bg-white-secondary pb-0 text-center">
        <Container>
          <Col className="mb-3 px-3">
            <h2 className="display-5">Case Studies</h2>
            <p className="lead">And an even wittier subheading.</p>
          </Col>
          <Col className="bg-dark shadow-sm mx-auto d-block p-5 rounded-top"></Col>
        </Container>
      </section>
    </>
  );
}

export default CaseStudies;
