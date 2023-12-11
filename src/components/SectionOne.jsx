import React from "react";
import dog from "../../public/assets/sectionOne/dog.svg";
import { Container, Row, Col } from "react-bootstrap";

const SectionOne = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <h2 className="sectionOne-dog-heading">
            First I wanted to be a veterinarian
          </h2>
          <p className="sectionOne-dog-paragraph">
            Lorem Ipsum available but the majority have suffered alteration in
            some form, by injected humour randomised words
          </p>
          <div className="button">
            <button type="button" className="btn btn-primary efbtn-lg mr-2">
              Contact Us
            </button>
            <button type="button" className="btn btn-primary efbtn-lg-1">
              Our Service
            </button>
          </div>
        </Col>
        <Col md={6}>
          <img src={dog} alt="Dog" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default SectionOne;
