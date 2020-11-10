import React from "react";
import { Line } from "react-chartjs-2";
import SampleData from "./sample.json";

const data = {
  labels: SampleData.labels,
  datasets: [
    {
      label: SampleData.name,
      data: SampleData.data,
      fill: false,
      backgroundColor: "rgb(64, 114, 238)",
      borderColor: "rgba(64, 114, 238, 0.8)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <div className="header">
      <h1 className="title">Line Chart</h1>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
