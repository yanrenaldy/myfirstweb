import React from "react";
import { Breadcrumb } from "antd";

const NavStats = ({ navStatsItem }) => {
  return (
    <div className="navstat">
      <Breadcrumb separator=">" items={navStatsItem} className="navStat" />
    </div>
  );
};

export default NavStats;
