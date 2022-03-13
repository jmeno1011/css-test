import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ charData }) => {
  return (
    <div>
      <Pie data={charData} />
    </div>
  );
};

export default PieChart;
