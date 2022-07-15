import React from "react";
import { Container, Col } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

function Portfolio() {
  return (
    <>
      <Col id="portfolio" className="scroll-anchor bg-light-secondary">
        &nbsp;
      </Col>
      <section
        className="bg-light-secondary pb-0 text-center"
      >
        <Container>
          <Slide triggerOnce={true} direction="up">
            <Col className="mb-3 px-3">
              <h2 className="display-5 text-uppercase">Portfolio</h2>
              <hr className="spacer mx-5 col-2 mx-auto my-2 text-opacity-90 text-white" />
              <p className="lead">And an even wittier subheading.</p>
            </Col>
          </Slide>
          <Slide triggerOnce={true} direction="up">
            <Col className="bg-dark shadow-sm mx-auto d-block p-5 rounded-top">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Col>
          </Slide>
        </Container>
      </section>
    </>
  );
}

export default Portfolio;
