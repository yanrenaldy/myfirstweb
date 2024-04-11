import React from "react";
import Banner from "../components/Banner";
import NavStats from "../components/NavStats";
import { HomeOutlined } from "@ant-design/icons";
import { Row } from "antd";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

function History() {
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
      title: "History",
    },
  ];

  return (
    <React.Fragment>
      <Banner h4text="HISTORY" bgimage="images/img7.jpg" />
      <NavStats navStatsItem={navStatsItem} />
      <Row>
        <h1 style={{marginLeft: "40px", marginRight: "40px", fontFamily: "Josefin Sans"}}>Our History</h1>
      </Row>
      <Row>
        <h4 style={{marginLeft: "40px", marginRight: "40px", fontFamily: "Josefin Sans"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h4>
      </Row>
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
}

export default History;
