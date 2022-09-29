import { useEffect } from "react";
import { useState } from "react";
import logo from "../images/logo.svg";
import BarChart from "./Components/BarChart.js";
import "./App.css";

export interface EXPENSE {
  id: Number;
  day: string;
  amount: Number;
}
export interface DATA {
  labels: string[];
  datasets: [{ label: string; data: Number[] }];
}

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "hsl(10, 79%, 65%)",
          display: "grid",
          gridTemplateColumns: "1fr 50px",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <div style={{ textAlign: "start" }}>
          <p>My balance</p>
          <p>300$</p>
        </div>
        <div
          style={{
            display: "grid",
            placeContent: "center",
          }}
        >
          <img src={logo}></img>
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          textAlign: "start",
          color: "black",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <p>Spending - Last 7 days</p>
        <BarChart />
      </div>
    </div>
  );
}

export default App;
