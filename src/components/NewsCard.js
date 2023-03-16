import React from "react";
import "../styling/styles.css";
import { Row, Card, Col } from "antd";

function NewsCard() {
  const { Meta } = Card;
  return (
    <div>
      <h3 className="newsTitle">LATEST NEWS</h3>
      <Row style={{ margin: "10px" }}>
        <Col lg={8} sm={24} className="newsCard">
          <Card
            style={{
              width: "350px",
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              title="News #1"
              description="3 March 2023"
              className="newsCardTitle"
            />
          </Card>
        </Col>
        <Col lg={8} sm={24} className="newsCard">
          <Card
            style={{
              width: "350px",
            }}
            cover={
              <img
                alt="example2"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              title="News #2"
              description="4 March 2023"
              className="newsCardTitle"
            />
          </Card>
        </Col>
        <Col lg={8} sm={24} className="newsCard">
          <Card
            style={{
              width: "350px",
            }}
            cover={
              <img
                alt="example3"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta
              title="News #3"
              description="10 March 2023"
              className="newsCardTitle"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default NewsCard;
