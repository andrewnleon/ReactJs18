import React from "react";
import { Container, Col } from "react-bootstrap";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="bg-light-secondary pt-4 pb-0 text-center">
        <Container>
          <Col className="my-3 p-3">
            <h2 className="display-5 text-uppercase">Portfolio</h2>
            <p className="lead">And an even wittier subheading.</p>
          </Col>
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
        </Container>
      </section>
    </>
  );
}

export default Portfolio;
