import React, { useState } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { fadeOutDown, slideInUp, pulse } from "react-animations";

const SlideUpEffect = keyframes`${slideInUp}`;
const SlideUp = styled.div`
  animation: 0.5s ${SlideUpEffect};
`;

const SlideDownEffect = keyframes`${fadeOutDown}`;
const SlideDown = styled.div`
  animation: 0.5s ${SlideDownEffect};
`;

const PulseInEffect = keyframes`${pulse}`;
const PulseIn = styled.div`
  animation: 0.5s ${PulseInEffect};
  transform: scaleX(1);
`;

function RecentWorkCard(prop) {
  const [isShown, setIsShown] = useState(false);
  return (
    <Col>
      <Card
        key={prop.id}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <Col className="card_thumbnail rounded">
          <Col className="card_caption bg-primary bg-opacity-50">
            <Col className="d-flex h-100">
              <Col className="d-flex flex-column">
                <Row className="masthead mb-auto">
                  <Col className="inner">
                    <Col
                      sm={12}
                      className="gap-2 pt-3 px-0 d-flex justify-content-center text-secondary opacity-50"
                    >
                      {prop.frameworks}
                    </Col>
                  </Col>
                </Row>
                <Row className="inner cover justify-content-center"></Row>
                <Row className="mastfoot mt-auto">
                  <Col className="title inner px-5 position-relative">
                    {isShown ? (
                      <SlideUp>
                        <Button
                          title={prop.name}
                          variant="primary text-white"
                          className="btn rounded-0 fw-bolder rounded-top w-100 py-3"
                        >
                          {prop.name}
                        </Button>
                      </SlideUp>
                    ) : (
                      <SlideDown>
                        <Button
                          title={prop.name}
                          variant="primary text-white"
                          className="btn rounded-0 fw-bolder rounded-top w-100 py-3"
                        >
                          {prop.name}
                        </Button>
                      </SlideDown>
                    )}
                  </Col>
                </Row>
              </Col>
            </Col>
          </Col>
          {isShown ? (
            <PulseIn>
              <Image
                src="https://www.andrewnl.com/wp-content/uploads/smh_thumbnail.jpg"
                className="img-fluid"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/414x258.jpg/f4f4f4/e2e2e2/?text=No+Image+Found";
                }}
              />
            </PulseIn>
          ) : (
            <Image
              title={prop.name}
              alt={prop.name}
              src="https://www.andrewnl.com/wp-content/uploads/smh_thumbnail.jpg"
              className="img-fluid"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/414x258.jpg/f4f4f4/e2e2e2/?text=No+Image+Found";
              }}
            />
          )}
        </Col>
        {/* <Card.Body>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body> */}
        {/* Placeholder */}
        {/* <Card.Body>
            <Card.Title>
              <Placeholder as="h2" animation="wave">
                <Placeholder style={{ width: "35%" }} />
              </Placeholder>
            </Card.Title>
            <Card.Text>
              <Placeholder as="p" animation="wave">
                <Placeholder xs={12} size="md"/>
                <Placeholder xs={12} size="md"/>
                <Placeholder xs={12} size="md"/>
              </Placeholder>
            </Card.Text>
          </Card.Body> */}
      </Card>
    </Col>
  );
}

export default RecentWorkCard;
