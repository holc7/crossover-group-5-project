import React from "react";
import "./SeventhSection.css";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../../assets/Sixth-Seventh-Section/heart-icon.svg";
import injection from "../../assets/Sixth-Seventh-Section/injection-icon.svg";
import docdevice from "../../assets/Sixth-Seventh-Section/doc-device.svg";

const SeventhSection = () => {
  return (
    <div className=" dog-human">
      <Container
        className="d-flex align-items-center"
        style={{ minHeight: "100vh" }}
      >
        {" "}
        <Row className="w-100 mb-5">
          <Col className="seventh-section-icon-numbers-wrapper">
            <img className="doctor-icons" src={heart} alt="heart" />
            <p className="number-clients">+34793</p>
            <p className="happy-clients">Happy Clients</p>
          </Col>
          <Col className="seventh-section-icon-numbers-wrapper">
            <img
              style={{ width: "75px" }}
              className="doctor-icons"
              src={docdevice}
              alt="heart"
            />
            <p className="number-clients">+45382</p>
            <p className="happy-clients">Department</p>
          </Col>
          <Col className="seventh-section-icon-numbers-wrapper">
            <img
              style={{ width: "85px" }}
              className="doctor-icons"
              src={injection}
              alt="heart"
            />
            <p className="number-clients">+54762</p>
            <p className="happy-clients">Vaccinations</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SeventhSection;
