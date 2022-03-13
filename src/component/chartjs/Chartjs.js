import React, { useState } from "react";
import BarChart from "./BarChart";
import { UserData } from "./Data";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Chartjs = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <>
      <h1 className="in-title">Chart - JS</h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 600 }}>
            <BarChart charData={userData} />
          </div>
          <div style={{ width: 600 }}>
            <LineChart charData={userData} />
          </div>
        </div>
        <div style={{ width: 400 }}>
          <PieChart charData={userData} />
        </div>
      </div>
    </>
  );
};

export default Chartjs;
