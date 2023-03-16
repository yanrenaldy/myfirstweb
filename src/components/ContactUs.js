import React from "react";
import { Col, Row } from "antd";
import {
  HomeOutlined,
  PhoneOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "../styling/styles.css";

function ContactUs() {
  return (
    <React.Fragment>
      <h3 className="contactTitle">CONTACT US</h3>
      <Row className="contactContainer">
        <Col sm={24} lg={12} className="newsCard">
          <iframe
            title="deLocation"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5011.963447611794!2d98.59829414262155!3d3.478168578758126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwMjgnNDEuMSJOIDk4wrAzNSc0Ny40IkU!5e0!3m2!1sid!2sid!4v1678412334374!5m2!1sid!2sid"
            width="500"
            height="300"
            style={{ border: "0" }}
            allowfullscreen="0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Col>

        <Col sm={24} lg={12}>
          <Row
            style={{
              marginBottom: "28px",
              paddingTop: "15px",
            }}
          >
            <Col>
              <HomeOutlined
                style={{ fontSize: "28px", paddingRight: "12px" }}
              />
            </Col>
            <Col>
              <Row className="addressTitle">Address</Row>
              <Row className="addressSubtitle">
                Jl. Lama, Namo Riam, Pancur Batu, Deli Serdang, Sumatera Utara
                20353
              </Row>
            </Col>
          </Row>

          <Row
            style={{
              paddingBottom: "28px",
            }}
          >
            <Col>
              <PhoneOutlined
                style={{ fontSize: "28px", paddingRight: "12px" }}
              />
            </Col>
            <Col>
              <Row className="addressTitle">Phone</Row>
              <Row className="addressSubtitle">(+62) 831-9809-5103</Row>
            </Col>
          </Row>

          <Row style={{ paddingBottom: "28px" }}>
            <Col>
              <FacebookOutlined
                style={{ fontSize: "28px", paddingRight: "12px" }}
              />
            </Col>
            <Col>
              <Row className="addressTitle">Facebook</Row>
              <Row className="addressSubtitle">Ryan Renaldy</Row>
            </Col>
          </Row>

          <Row style={{ paddingBottom: "28px" }}>
            <Col>
              <InstagramOutlined
                style={{ fontSize: "28px", paddingRight: "12px" }}
              />
            </Col>
            <Col>
              <Row className="addressTitle">Instagram</Row>
              <Row className="addressSubtitle">yanrenaldy</Row>
            </Col>
          </Row>

          <Row style={{ paddingBottom: "25px" }}>
            <Col>
              <YoutubeOutlined
                style={{ fontSize: "28px", paddingRight: "12px" }}
              />
            </Col>
            <Col>
              <Row className="addressTitle">YouTube</Row>
              <Row className="addressSubtitle">Ryan Renaldy</Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default ContactUs;
