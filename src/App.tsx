import { useEffect } from "react";
import { useState } from "react";
import logo from "../images/logo.svg";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  function getExpenseList() {
    return fetch(`http://localhost:3000/expenses`)
      .then((response) => response.json())
      .then((data) => {
        setExpenses(data);
      });
  }

  useEffect(() => {
    getExpenseList();
  }, []);
  console.log(expenses);

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
        {expenses.map((expense) => {
          return (
            <>
              <p>{expense.amount}</p>
              <p>{expense.day}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
