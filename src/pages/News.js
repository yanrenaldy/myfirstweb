import React from "react";
import Banner from "../components/Banner";
import NavStats from "../components/NavStats";
import { HomeOutlined } from "@ant-design/icons";
import { Row, Col, Card, Pagination } from "antd";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

function News() {
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
      title: "News",
    },
  ];

  const { Meta } = Card;

  return (
    <React.Fragment>
      <Banner h4text="LATEST NEWS" bgimage="images/img5.jpg" />
      <NavStats navStatsItem={navStatsItem} />
      <div className="cardContainer">
        <Row gutter={16}>
          <Col lg={12}>
            <Card cover={<img alt="example3" src="images/img2.jpg" />}>
              <Meta
                title="News #1"
                description="3 March 2023"
                className="newsCardTitle"
              />
            </Card>
          </Col>
          <Col lg={12}>
            <Card cover={<img alt="example2" src="images/img1.jpg" />}>
              <Meta
                title="News #2"
                description="6 March 2023"
                className="newsCardTitle"
              />
            </Card>
          </Col>
        </Row>

        <Row
          gutter={16}
          style={{
            marginTop: "16px",
          }}
        >
          <Col lg={12}>
            <Card cover={<img alt="example3" src="images/img3.jpg" />}>
              <Meta
                title="News #3"
                description="7 March 2023"
                className="newsCardTitle"
              />
            </Card>
          </Col>
          <Col lg={12}>
            <Card cover={<img alt="example2" src="images/img4.jpg" />}>
              <Meta
                title="News #4"
                description="9 March 2023"
                className="newsCardTitle"
              />
            </Card>
          </Col>
        </Row>

        <Row
          gutter={16}
          style={{
            marginTop: "16px",
            marginBottom: "100px",
          }}
        >
          <Col lg={12}>
            <Card cover={<img alt="example3" src="images/img5.jpg" />}>
              <Meta
                title="News #5"
                description="10 March 2023"
                className="newsCardTitle"
              />
            </Card>
          </Col>
          <Col lg={12}>
            <Card cover={<img alt="example2" src="images/img6.jpg" />}>
              <Meta
                title="News #6"
                description="11 March 2023"
                className="newsCardTitle"
              />
            </Card>
          </Col>
        </Row>
      </div>

      <div
        style={{
          display: "flex",
          backgroundColor: "#D9D9D9",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          paddingTop: "30px",
          paddingBottom: "30px",
          marginBottom: "40px",
        }}
      >
        <Pagination defaultCurrent={1} total={50} />
      </div>

      <ContactUs />
      <Footer />
    </React.Fragment>
  );
}

export default News;
