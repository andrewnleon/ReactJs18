import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Slide, Fade } from "react-awesome-reveal";
import RecentWorkCard from "../components/RecentWorkCard";
import { SiCsharp, SiGulp } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { BsWordpress } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";
import { Gi3DGlasses } from "react-icons/gi";

function RecentWork() {
  const projects = [
    {
      id: 1,
      name: "Stanley Martin Homes",
      frameworks: (
        <>
          <SiCsharp className="fs-2" />
          <DiCss3 className="fs-2" />
          <SiGulp className="fs-2" />
          <VscAzure className="fs-2" />
        </>
      ),
      delay: "10",
    },
    {
      id: 2,
      name: "Liquidity Services",
      frameworks: (
        <>
          <SiCsharp className="fs-2" />
          <DiCss3 className="fs-2" />
          <VscAzure className="fs-2" />
        </>
      ),
      delay: "20",
    },
    {
      id: 3,
      name: "Fantasy Factory Performance",
      frameworks: (
        <>
          <SiCsharp className="fs-2" />
          <BsWordpress className="fs-2" />
        </>
      ),
      delay: "30",
    },
  ];
  return (
    <>
      <Col id="recentwork" className="scroll-anchor bg-white">
        &nbsp;
      </Col>
      <section className="bg-light-primary pt-0 pb-5">
        <Container className="text-center">
          <Slide triggerOnce={true} direction="down">
            <Col className="mt-0 mb-3 pb-1">
              <h2 className="text-uppercase display-6">Recent Work</h2>
              <hr className="spacer mx-5 col-2 mx-auto my-2 text-opacity-90 text-white" />
            </Col>
          </Slide>
          <Row xs={1} md={3} lg={12} className="g-4">
            {projects.map((prop) => {
              return (
                <Col key={prop.id}>
                  <Slide
                    direction="up"
                    triggerOnce={true}
                    delay={prop.delay}
                  >
                    <RecentWorkCard
                      id={prop.id}
                      name={prop.name}
                      frameworks={prop.frameworks}
                    />
                  </Slide>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Fade triggerOnce={true} direction="up" delay={430}>
              <Col className="mt-4 pb-1">
                <Button
                  size="lg"
                  variant="outline-secondary bg-primary"
                  className="text-uppercase p-0 bg-opacity-100"
                  href="#recentwork"
                >
                  <span>
                    View All
                    <Gi3DGlasses size={27} className="mx-2 mt-n2 btn-icon" />
                  </span>
                </Button>
              </Col>
            </Fade>
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
