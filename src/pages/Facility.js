import React from "react";
import Banner from "../components/Banner";
import NavStats from "../components/NavStats";
import { HomeOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

function Facility() {
  const navStatsItem = [
    {
      href: "/",
      title: (
        <>
          <HomeOutlined />
          <span>Home</span>
        </>
      ),
    },
    {
      title: "Facility",
    },
  ];

  return (
    <React.Fragment>
      <Banner h4text="FACILITY" bgimage="images/img6.jpg" />
      <NavStats navStatsItem={navStatsItem} />
      <div className="bigTextBox">
        <h4 className="bigTextFeature">
          Facility is something such as a place, building, or equipment used for
          a particular purpose or activity
        </h4>
      </div>

      <div style={{ marginTop: "40px" }}>
        <Row>
          <Col
            md={12}
            xs={24}
            style={{ backgroundColor: "violet" }}
            className="keyFeatures"
          >
            <div className="keyFeaturesTextBox">
              <h4>Facility 1</h4>
            </div>
          </Col>
          <Col
            md={12}
            xs={24}
            style={{ backgroundColor: "brown" }}
            className="keyFeatures"
          >
            <div className="keyFeaturesTextBox">
              <h4>Facility 2</h4>
            </div>
          </Col>
        </Row>

        <Row>
          <Col
            md={12}
            xs={24}
            style={{ backgroundColor: "blue" }}
            className="keyFeatures"
          >
            <div className="keyFeaturesTextBox">
              <h4>Facility 3</h4>
            </div>
          </Col>
          <Col
            md={12}
            xs={24}
            style={{ backgroundColor: "burlywood" }}
            className="keyFeatures"
          >
            <div className="keyFeaturesTextBox">
              <h4>Facility 4</h4>
            </div>
          </Col>
        </Row>

        <Row>
          <Col
            md={12}
            xs={24}
            style={{ backgroundColor: "purple" }}
            className="keyFeatures"
          >
            <div className="keyFeaturesTextBox">
              <h4>Facility 5</h4>
            </div>
          </Col>
          <Col
            md={12}
            xs={24}
            style={{ backgroundColor: "coral" }}
            className="keyFeatures"
          >
            <div className="keyFeaturesTextBox">
              <h4>Facility 6</h4>
            </div>
          </Col>
        </Row>

        <Row style={{ marginBottom: "34px" }}>
          <Col
            md={12}
            xs={24}
            style={{ backgroundColor: "moccasin" }}
            className="keyFeatures"
          >
            <div className="keyFeaturesTextBox">
              <h4>Facility 7</h4>
            </div>
          </Col>
          <Col
            md={12}
            xs={24}
            style={{ backgroundColor: "maroon" }}
            className="keyFeatures"
          >
            <div className="keyFeaturesTextBox">
              <h4>Facility 8</h4>
            </div>
          </Col>
        </Row>
      </div>

      <ContactUs />
      <Footer />
    </React.Fragment>
  );
}

export default Facility;
