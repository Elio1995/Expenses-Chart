import React, { useState } from "react";
// import { Bar } from "react-chartjs-2";
import { DATA, EXPENSE } from "../App";
import "../App.css";
import { Expenses } from "../../data";
// import { Chart as ChartJS } from "chart.js/auto";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(...registerables);

const state = {
  labels: Expenses?.map((data: EXPENSE) => data.day),

  datasets: [
    {
      label: "Amount",
      data: Expenses?.map((data: EXPENSE) => data.amount),
      backgroundColor: "hsl(10, 79%, 65%)",
      circular: false,
    },
  ],
};

function BarChart() {
  return <Bar data={state} className="barchart" />;
}

export default BarChart;
