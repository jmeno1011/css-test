import React from "react";
import "./styles.css";

export const ToggleButton = () => {
  return (
    <div
      style={{ padding: "2em", height: "300px", backgroundColor: "aliceblue" }}
    >
      <input type="checkbox" id="check" className="toggle" />
      <label for="check">Checked?</label>
    </div>
  );
};
