import React from "react";
import { Carousel, Col, Container, Row, Spinner } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import useFetch from "../../hooks/useFetch";
import { IKImage } from "imagekitio-react";

function Feedback() {
  const {
    data: statements,
    isLoadingSlides,
    errorSlides,
  } = useFetch("/data/feedbackData.json");
  const {
    data: jopHistory,
    isLoadingLogos,
    errorLogos,
  } = useFetch("/data/JobHistoryData.json");
  return (
    <section className="bg-light-secondary pb-0 text-center">
      <Container>
        <Slide triggerOnce={true} direction="up">
          <BsChatSquareQuoteFill
            size={56}
            className="text-secondary mb-2 opacity-50"
          />
          <Col lg={12}>
            <h2 className="text-uppercase display-6 font-secondary">
              Testimonials
            </h2>
            <hr className="spacer mx-auto" />
          </Col>
        </Slide>
        <Slide triggerOnce={true} direction="up">
          <Col xs={12} md={10} className="mx-auto">
            <Carousel
              id="feedback_slider"
              variant="dark"
              pause={true}
              touch={true}
              wrap={true}
              interval={null}
              indicators={false}
            >
              {errorSlides && console.log(errorSlides)}
              {isLoadingSlides && (
                <Spinner variant="primary" animation="grow" />
              )}
              {statements.map(function (prop) {
                return (
                  <Carousel.Item key={prop.id} style={{ minHeight: "330px" }}>
                    <Carousel.Caption className="col-9">
                      <Container className="bg-primary text-white pt-4 px-4 pb-1 rounded">
                        <blockquote className="blockquote fst-italic">
                          <p className="border-start border-5 border-secondary border-opacity-25 text-start px-3">
                            {prop.quote}
                          </p>
                          <footer className="mt-2 opacity-50 text-light">
                            <h5>{prop.author}</h5>
                            <h6>{prop.position}</h6>
                            <cite title={prop.company}>{prop.company}</cite>
                          </footer>
                        </blockquote>
                      </Container>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Slide>
        <Row className="col-lg-9 col-sm-12 px-lg-5 mx-auto opacity-40 mt-1 mb-5 gap-2 justify-content-center">
          {errorLogos && console.log(errorLogos)}
          {isLoadingLogos && <Spinner variant="primary" animation="grow" />}
          {jopHistory.map((prop) => {
            return (
              <Col lg={2} xs={3} key={prop.id} className="d-flex">
                <IKImage
                  key={prop.id}
                  className="img-fluid align-self-center mx-auto"
                  path={`${prop.logo}`}
                  alt={prop.company}
                  title={prop.company}
                  transformation={[
                    {
                      width: "100",
                    },
                  ]}
                  loading="lazy"
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Feedback;
