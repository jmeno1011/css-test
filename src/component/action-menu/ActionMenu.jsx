import React, { useEffect, useState } from "react";
import sample1 from "./img/image_sample1.jpg";
import "./action-menu.css";

function ActionMenu() {
  const [navigations, setNavigation] = useState(false);
  const navOnClick = () => {
    if (navigations === false) {
      console.log(navigations);
      setNavigation(true);
    } else {
      console.log(navigations);
      setNavigation(false);
    }
  };
  useEffect(() => {
    return () => {
      setNavigation(false);
    };
  }, []);
  return (
    <>
      <h1 className="in-title">Action Menu</h1>
      <div className="action-menu-wrapper">
        <div className="list">
          <div className="user">
            <div className="imgBox">
              <img src={sample1} />
            </div>
            <div className="details">
              <h3>MatchStick</h3>
              <p>fire tool</p>
            </div>
          </div>
          <div
            className={`navigation ${navigations ? "active" : ""}`}
            onClick={navOnClick}
          >
            <span>
              {/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> */}
            </span>
            <span>{/* <FontAwesomeIcon icon="fa-regular fa-heart" /> */}</span>
            <span>
              {/* <FontAwesomeIcon icon="fa-regular fa-trash-can" /> */}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActionMenu;
