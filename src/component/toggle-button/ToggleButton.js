import React from "react";
import "./styles.css";

export const ToggleButton = () => {
  return (
    <>
      <h1 className="in-title">Toggle Button</h1>
      <div
        style={{
          padding: "2em",
          height: "300px",
          backgroundColor: "aliceblue",
        }}
      >
        <input type="checkbox" id="check" className="toggle" />
        <label for="check">Checked?</label>
      </div>
    </>
  );
};
