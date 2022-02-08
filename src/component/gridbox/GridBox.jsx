import React from "react";
import { Link, Outlet } from "react-router-dom";

export function GridBox() {
  return (
    <>
      <h1 className="in-title">Grid Box</h1>
      <nav>
        <Link to="grid-ex" className="in-link">
          1. grid-ex
        </Link>
        <Link to="grid-template-area" className="in-link">
          2. grid-template-area
        </Link>
        <Link to="grid-rows-columns" className="in-link">
          3. grid-rows-columns
        </Link>
        <Link to="grid-short-cut" className="in-link">
          4. grid-short-cut
        </Link>
        <Link to="grid-line-naming" className="in-link">
          5. grid-line-naming
        </Link>
        <Link to="grid-template" className="in-link">
          6. grid-template
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
