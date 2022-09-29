import { Expenses } from "../../data";
import "../App.css";

function Footer() {
  const sum = Expenses.map((expense) => expense.amount).reduce((a, b) => a + b);
  return (
    <div
      className="mt-6"
      style={{ display: "grid", gridTemplateColumns: "1fr 150px" }}
    >
      <div>
        <p style={{ color: "grey", fontWeight: "500" }}>Total this month</p>
        <p style={{ fontSize: "40px", marginTop: "10px", fontWeight: "500" }}>
          ${sum}
        </p>
      </div>
      <div className="mt-3">
        <p className="text-end" style={{ fontWeight: "500" }}>
          +2.4%
        </p>
        <p className="text-end" style={{ color: "grey", fontWeight: "500" }}>
          from last month
        </p>
      </div>
    </div>
  );
}

export default Footer;
