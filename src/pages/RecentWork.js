import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { Gi3DGlasses } from "react-icons/gi";

const fadeAnimation = keyframes`${fadeIn}`;
const FadeEffect = styled.div`
  animation: 1.2s ${fadeAnimation};
`;

function RecentWork() {
  const numbers = [1, 2, 3];
  return (
    <>
      <section id="recentwork" className="bg-light-primary py-5 text-center">
        <Container>
          <Col className="mt-2 mb-3 pb-1">
            <h2 className="text-uppercase display-6">Recent Work</h2>
            <hr className="divider" />
          </Col>
          <Row xs={1} md={3} className="g-4">
            {numbers.map((number) => (
              <Col>
                <Card key={number}>
                  <Col className="thumbnail rounded-lg h-100 d-block">
                    <Col className="caption">
                      Test
                    </Col>
                    <Card.Img data-src="holder.js/300x200?auto=yes" className="img-fluid" style={{ height: "200" }}
                    />
                  </Col>
                  {/* Content */}
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
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
            ))}
          </Row>
          <Row>
            <Col className="mt-4 pb-1">
              <Button
                size="lg"
                variant="outline-secondary bg-secondary"
                className="text-uppercase p-0"
                href="#recentwork"
              >
                <span>
                  View All
                  <FadeEffect>
                    <Gi3DGlasses size={27} className="mx-2 mt-n2 btn-icon" />
                  </FadeEffect>
                </span>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default RecentWork;

// import { Spinner } from "react-bootstrap";
// import useFetch from "../api/useFetch";

// function RecentWork() {
//   const { data: projects, isLoading, error } = useFetch("/weatherforecast");
//   return (
//     <>
//       {error && <div>{error}</div>}
//       {isLoading && <Spinner animation="grow" />}
//       <ul>
//         {projects.map((project) => (
//           <li key={project.id}>{project.date}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default RecentWork;
