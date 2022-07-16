import React from "react";
import { Col, Row } from "react-bootstrap";

function FooterMenu() {
  return (
    <Row>
      <Col lg={3} xs={12} className="mb-3 text-white text-center text-lg-start">
        <h5>Categories</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Web Design</li>
          <li class="nav-item mb-2">UX/UI Design</li>
          <li class="nav-item mb-2">Pricing</li>
          <li class="nav-item mb-2">FAQs</li>
          <li class="nav-item mb-2">About</li>
        </ul>
      </Col>
      <Col lg={3} xs={12} className="mb-3 text-white text-center text-lg-start">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Home</li>
          <li class="nav-item mb-2">Features</li>
          <li class="nav-item mb-2">Pricing</li>
          <li class="nav-item mb-2">FAQs</li>
          <li class="nav-item mb-2">About</li>
        </ul>
      </Col>

      <Col lg={3} xs={12} className="mb-3 text-white text-center text-lg-start">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">Home</li>
          <li class="nav-item mb-2">Features</li>
          <li class="nav-item mb-2">Pricing</li>
          <li class="nav-item mb-2">FAQs</li>
          <li class="nav-item mb-2">About</li>
        </ul>
      </Col>
      <Col lg={3} xs={12} className=""></Col>
    </Row>
  );
}

export default FooterMenu;
