import React from "react";
// import { Button, Card, Col, Container, Row } from "react-bootstrap";

// function RecentWork() {
//   return (
//     <>
//       <section className="bg-light-primary py-5 text-center">
//         <Container className="container">
//           <Col className="mb-3 pb-1">
//             <h2 className="text-uppercase display-6">Recent Work</h2>
//             <hr class="divider" />
//           </Col>
//           <Row xs={1} md={3} className="g-4">
//             {Array.from({ length: 3 }).map((_, idx) => (
//               <Col>
//                 <Card>
//                   <Card.Img
//                     data-src="holder.js/254px254?auto=yes"
//                     className="img-fluid"
//                   />
//                   {/* Content */}
//                   <Card.Body>
//                     <Card.Title>Card title</Card.Title>
//                     <Card.Text>
//                       This is a longer card with supporting text below as a
//                       natural lead-in to additional content. This content is a
//                       little bit longer.
//                     </Card.Text>
//                   </Card.Body>
//                   {/* Placeholder */}
//                   {/* <Card.Body>
//                     <Card.Title>
//                       <Placeholder as="h2" animation="wave">
//                         <Placeholder style={{ width: "35%" }} />
//                       </Placeholder>
//                     </Card.Title>
//                     <Card.Text>
//                       <Placeholder as="p" animation="wave">
//                         <Placeholder xs={12} size="md"/>
//                         <Placeholder xs={12} size="md"/>
//                         <Placeholder xs={12} size="md"/>
//                       </Placeholder>
//                     </Card.Text>
//                   </Card.Body> */}
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//           <Row>
//             <Col className="mt-4">
//               <Button
//                 size="lg"
//                 variant="primary"
//                 className="btn text-uppercase text-white"
//                 href="#"
//               >
//                 View More
//               </Button>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// }

// export default RecentWork;

import { Spinner } from "react-bootstrap";
import useFetch from "../api/useFetch";

function RecentWork() {
  const { data: projects, isLoading, error } = useFetch("/weatherforecast");
  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <Spinner animation="grow" />}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.date}</li>
        ))}
      </ul>
    </>
  );
}
export default RecentWork;
