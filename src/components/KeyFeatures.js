import React from "react";
import "../styling/styles.css";
import { Row, Col } from "antd";

function KeyFeatures() {
  return (
    <React.Fragment>
      <div className="keyFeatureContainer">
        <Row>
          <Col
            sm={12}
            xs={24}
            className="keyFeatures"
            style={{
              backgroundImage: "url(images/img3.jpg)",
            }}
          >
            <div className="keyFeaturesTextBox">
              <h4>What is Lorem Ipsum?</h4>
              <h5 className="linkWithBorderBottom">Lebih Lengkap</h5>
            </div>
          </Col>
          <Col
            sm={12}
            xs={24}
            className="keyFeatures"
            style={{
              backgroundImage: "url(images/img4.jpg)",
            }}
          >
            <div className="keyFeaturesTextBox">
              <h4>What is Lorem Ipsum?</h4>
              <h5 className="linkWithBorderBottom">Lebih Lengkap</h5>
            </div>
          </Col>
        </Row>

        <Row>
          <Col
            sm={12}
            xs={24}
            className="keyFeatures"
            style={{
              backgroundImage: "url(images/img5.jpg)",
            }}
          >
            <div className="keyFeaturesTextBox">
              <h4>What is Lorem Ipsum?</h4>
              <h5 className="linkWithBorderBottom">Lebih Lengkap</h5>
            </div>
          </Col>
          <Col
            sm={12}
            xs={24}
            style={{
              backgroundImage: "url(images/img6.jpg)",
            }}
            className="keyFeatures"
          >
            <div className="keyFeaturesTextBox">
              <h4 className="longText">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </h4>
            </div>
          </Col>
        </Row>

        <Row>
          <Col span={24} className="biggestFeature">
            <div className="keyFeaturesTextBox">
              <h4 className="longText">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </h4>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default KeyFeatures;
