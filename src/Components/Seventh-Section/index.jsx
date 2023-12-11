import React from "react";
import "./SeventhSection.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import heart from "../../assets/Sixth-Seventh-Section/heart-icon.svg";
import injection from "../../assets/Sixth-Seventh-Section/injection-icon.svg";
import docdevice from "../../assets/Sixth-Seventh-Section/doc-device.svg";
import doc1 from "../../assets/Sixth-Seventh-Section/doc1.svg";
import doc2 from "../../assets/Sixth-Seventh-Section/doc2.svg";
import doc3 from "../../assets/Sixth-Seventh-Section/doc3.svg";

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
          <Col className="seventh-section-icon-numbers-wrapper mb-5">
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

      <Container>
        <Row>
          <Col className="seventh-section-wrapper text-center">
            <h2 className="seventh-section-heading">Recent Posts</h2>
            <p className="seventh-section-paragraph">
              Lorem ipsum available, but the majority have suffered alteration
              in some form.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={10} sm={8} md={6} lg={4} xl={3} className="mb-4">
            <Card className="h-100 d-flex flex-column shadow">
              <Card.Img style={{ height: "300px" }} variant="top" src={doc1} />
              <Card.Body className="flex-grow-1 d-flex flex-column">
                <Card.Title>As a veterinarian and lover of animals</Card.Title>
                <Card.Text className="seventh-section-date-text">
                  FEBRUARY 09,2020
                </Card.Text>
                <Card.Text>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some words which look.
                </Card.Text>
                <Card.Text className="seventh-section-date-read-text">
                  Read More +
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={10} sm={8} md={6} lg={4} xl={3} className="mb-4">
            <Card className="h-100 d-flex flex-column shadow">
              <Card.Img style={{ height: "300px" }} variant="top" src={doc2} />
              <Card.Body className="flex-grow-1 d-flex flex-column">
                <Card.Title>As a veterinarian and lover of animals</Card.Title>
                <Card.Text className="seventh-section-date-text">
                  FEBRUARY 10,2020
                </Card.Text>
                <Card.Text>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some words which look.
                </Card.Text>
                <Card.Text className="seventh-section-date-read-text">
                  Read More +
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={10} sm={8} md={6} lg={4} xl={3} className="mb-4">
            <Card className="h-100 d-flex flex-column shadow">
              <Card.Img style={{ height: "300px" }} variant="top" src={doc3} />
              <Card.Body className="flex-grow-1 d-flex flex-column">
                <Card.Title>As a veterinarian and lover of animals</Card.Title>
                <Card.Text className="seventh-section-date-text">
                  FEBRUARY 11,2020
                </Card.Text>
                <Card.Text>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some words which look.
                </Card.Text>
                <Card.Text className="seventh-section-date-read-text">
                  Read More +
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/*   <Container>
        <Col xs={10} sm={8} md={6} lg={4} xl={3} className="mb-4">
          <Row className="d-flex align-items-center justify-content-center  mt-5">
            <Card style={{ width: "18rem" }} className="mx-3">
              <Card.Img variant="top" src={doc1} />
              <Card.Body>
                <Card.Title>As a veterinarian and lover of animals</Card.Title>
                <Card.Text className="seventh-section-date-text">
                  FEBRUARY 09,2020
                </Card.Text>
                <Card.Text>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some words which look.
                </Card.Text>
                <Card.Text className="seventh-section-date-read-text">
                  Read More +
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="mx-3">
              <Card.Img variant="top" src={doc2} />
              <Card.Body>
                <Card.Title>As a veterinarian and lover of animals</Card.Title>
                <Card.Text className="seventh-section-date-text">
                  FEBRUARY 10,2020
                </Card.Text>
                <Card.Text>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some words which look.
                </Card.Text>
                <Card.Text className="seventh-section-date-read-text">
                  Read More +
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="mx-3">
              <Card.Img variant="top" src={doc3} />
              <Card.Body>
                <Card.Title>As a veterinarian and lover of animals</Card.Title>
                <Card.Text className="seventh-section-date-text">
                  FEBRUARY 11,2020
                </Card.Text>

                <Card.Text>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some words which look.
                </Card.Text>
                <Card.Text className="seventh-section-date-read-text">
                  Read More +
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Container> */}
    </div>
  );
};

export default SeventhSection;
