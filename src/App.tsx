import logo from "../images/logo.svg";
import BarChart from "./Components/BarChart.js";
import { Expenses } from "../data";
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

const sum = Expenses.map((expense) => expense.amount).reduce((a, b) => a + b);

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
        <hr className="mt-6" />
        <div
          className="mt-6"
          style={{ display: "grid", gridTemplateColumns: "1fr 150px" }}
        >
          <div>
            <p style={{ color: "grey", fontWeight: "500" }}>Total this month</p>
            <p
              style={{ fontSize: "40px", marginTop: "10px", fontWeight: "500" }}
            >
              ${sum}
            </p>
          </div>
          <div className="mt-3">
            <p className="text-end" style={{ fontWeight: "500" }}>
              +2.4%
            </p>
            <p
              className="text-end"
              style={{ color: "grey", fontWeight: "500" }}
            >
              from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
