import React from "react";
import Banner from "../components/Banner";
import NavStats from "../components/NavStats";
import { HomeOutlined } from "@ant-design/icons";

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
      <Banner h4text="ABOUT" bgimage="images/img7.jpg" />
      <NavStats navStatsItem={navStatsItem} />
    </React.Fragment>
  );
}

export default History;
