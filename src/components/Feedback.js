import React from "react";
import { Carousel, Col, Container, Spinner } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import useFetch from "../api/useFetch";

function Feedback() {
  const {
    data: statements,
    isLoading,
    error,
  } = useFetch("/data/feedbackdata.json");
  return (
    <section className="bg-light-secondary pb-0 text-center">
      <Container>
        <Slide triggerOnce={true} direction="up">
          <BsChatSquareQuoteFill size={56} className="text-white mb-2" />
          <Col lg={12}>
            <h2 className="text-uppercase display-6 font-secondary">
              Testimonials
            </h2>
            <hr className="spacer mx-auto" />
          </Col>
        </Slide>
        <Slide triggerOnce={true} direction="up">
          <Col lg={11} xs={12} className="mx-auto">
            <Carousel
              id="feedback_slider"
              variant="dark"
              pause={true}
              touch={true}
              wrap={true}
              interval={null}
            >
              {error && <div>{error}</div>}
              {isLoading && <Spinner animation="grow" />}
              {statements
                ? statements.map(function (prop) {
                    return (
                      <Carousel.Item key={prop.id} style={{ height: "30vh" }}>
                        <Carousel.Caption className="m-n1">
                          <Container className="bg-primary text-white pt-4 px-4 pb-1 rounded">
                            <blockquote className="blockquote fst-italic">
                              <p className="border-start border-5 border-secondary border-opacity-25 text-start px-3">
                                {prop.quote}
                              </p>
                              <footer className="mt-2 opacity-50 fs-6 text-light">
                                <h5>{prop.author}</h5>
                                <h6>{prop.position}</h6>
                                <cite title={prop.company}>{prop.company}</cite>
                              </footer>
                            </blockquote>
                          </Container>
                        </Carousel.Caption>
                      </Carousel.Item>
                    );
                  })
                : ""}
            </Carousel>
          </Col>
        </Slide>
        <Col lg={12}>
          {/* {stackIcons.map((prop) => {
            return (
              <OverlayTrigger
                key={prop.id}
                placement="bottom"
                delay={900}
                overlay={
                  <Tooltip
                    id={`tooltip-${prop.id}`}
                    className="position-absolute"
                  >
                    {prop.tooltip}
                  </Tooltip>
                }
              >
                <Col
                  key={prop.id}
                  className="text-center"
                  ref={target}
                  onMouseOut={() => setShow(false)}
                  onMouseOver={() => setShow(true)}
                >
                  {prop.icon}
                </Col>
              </OverlayTrigger>
            );
          })} */}
        </Col>
      </Container>
    </section>
  );
}

export default Feedback;
