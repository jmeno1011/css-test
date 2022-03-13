import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ charData }) => {
  return (
    <div>
      <Line data={charData} />
    </div>
  );
};

export default LineChart;
