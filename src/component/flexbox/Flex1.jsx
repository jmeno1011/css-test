import React from "react";

export function Flex1() {
  return (
    <>
      <h2 className="inner-title">flex</h2>
      <span className="description">
        main-axis: justify-content // cross-axis: align-items
      </span>
      <div className="wrapper-1">
        <div className="box">
          <span className="box-number">1</span>
        </div>
        <div className="box">
          <span className="box-number">2</span>
        </div>
        <div className="box">
          <span className="box-number">3</span>
        </div>
      </div>
    </>
  );
}
