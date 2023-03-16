import React from "react";
import "../styling/styles.css";

function Walls() {
  return (
    <React.Fragment>
      <div className="Walls" />
      <div className="openingText">
        <h4 style={{ fontWeight: "600" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </h4>
        <div className="linkBox">
          <h5 className="linkWithBorderBottom">Selengkapnya</h5>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Walls;
