import React from "react";

const Banner = ({ h4text, bgimage }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bgimage})` }}>
      <div className="bannerTitle">
        <h4>{h4text}</h4>
      </div>
    </div>
  );
};

export default Banner;
