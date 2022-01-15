import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./flexbox.css";

function FlexBox() {
  return (
    <>
      <h1 className="in-title">Flex Box</h1>
      <nav>
        <Link to="flex" className="in-link">
          1. flex
        </Link>
        <Link to="flex-direction" className="in-link">
          2. flex-direction
        </Link>
        <Link to="align-self" className="in-link">
          3. align-self
        </Link>
        <Link to="wrap" className="in-link">
          4. wrap
        </Link>
        <Link to="glow-shrink" className="in-link">
          5. grow and shrink
        </Link>
        <Link to="flex-basis" className="in-link">
          6. flex-basis
        </Link>
      </nav>
      {/* <h2 className="inner-title">default</h2>
      <span className="description">description</span>
      <div className="wrapper">
        <div className="box">
          <span className="box-number">1</span>
        </div>
        <div className="box">
          <span className="box-number">2</span>
        </div>
        <div className="box">
          <span className="box-number">3</span>
        </div>
      </div> */}
      <Outlet />
    </>
  );
}

export default FlexBox;
