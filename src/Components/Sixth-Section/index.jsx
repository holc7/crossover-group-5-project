import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import vet1 from "../../assets/Sixth-Seventh-Section/Sixth-section-img1.svg";
import vet2 from "../../assets/Sixth-Seventh-Section/Sixth-section-img2.svg";
import vet3 from "../../assets/Sixth-Seventh-Section/Sixth-section-img3.svg";
import facebook from "../../assets/Sixth-Seventh-Section/icons8-facebook.svg";
import instagram from "../../assets/Sixth-Seventh-Section/icons8-instagram.svg";
import twitter from "../../assets/Sixth-Seventh-Section/icons8-twitter-circled.svg";
import whatsapp from "../../assets/Sixth-Seventh-Section/icons8-whatsapp.svg";
import "./SixthSection.css";
const SixthSection = () => {
  return (
    <Container>
      <Row>
        <Col className="sixth-section-wrapper text-center mt-5">
          <h2 className="sixth-section-heading">The vetcare team</h2>
          <p className="sixth-section-paragraph">
            Lorem ipsum available, but the majority have suffered alteration in
            some form.
          </p>
        </Col>
      </Row>
      <Container>
        <Row className="sixth-section-image mt-4 d-flex text-center align-item-center">
          <Col
            xs={12}
            md={6}
            lg={6}
            xl={4}
            className="d-flex justify-content-center"
          >
            <div>
              <Image src={vet1} rounded />

              <h3 className="sixth-section-name">Jennifer Mullen</h3>
              <p className="sixth-section-role">VETERINARY</p>
              <div className="sixth-section-icons d-flex justify-content-center align-items-center gap-2">
                <img
                  style={{ width: "30px" }}
                  src={instagram}
                  alt="instagram"
                />
                <img style={{ width: "30px" }} src={facebook} alt="facebook" />
                <img style={{ width: "30px" }} src={twitter} alt="twitter" />
                <img style={{ width: "40px" }} src={whatsapp} alt="whatsapp" />
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={6}
            xl={4}
            className=" d-flex justify-content-center text-center"
          >
            <div>
              <Image src={vet2} rounded />

              <h3 className="sixth-section-name">Sheeren Collins</h3>
              <p className="sixth-section-role">ADMINISTRATION</p>
              <div className="sixth-section-icons d-flex justify-content-center align-items-center gap-2">
                <img
                  style={{ width: "30px" }}
                  src={instagram}
                  alt="instagram"
                />
                <img style={{ width: "30px" }} src={facebook} alt="facebook" />
                <img style={{ width: "30px" }} src={twitter} alt="twitter" />
                <img style={{ width: "40px" }} src={whatsapp} alt="whatsapp" />
              </div>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={6}
            xl={4}
            className="d-flex justify-content-center text-center"
          >
            <div>
              <Image src={vet3} rounded />

              <h3 className="sixth-section-name">Jennifer Mullen</h3>
              <p className="sixth-section-role">VETERINARY</p>
              <div className="sixth-section-icons d-flex justify-content-center align-items-center gap-2">
                <img
                  style={{ width: "30px" }}
                  src={instagram}
                  alt="instagram"
                />
                <img style={{ width: "30px" }} src={facebook} alt="facebook" />
                <img style={{ width: "30px" }} src={twitter} alt="twitter" />
                <img style={{ width: "40px" }} src={whatsapp} alt="whatsapp" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SixthSection;
