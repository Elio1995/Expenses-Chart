import { Expenses } from "../../data";
import "../App.css";

function Footer() {
  const sum = Expenses.map((expense) => expense.amount).reduce((a, b) => a + b);
  return (
    <div className="mt-6 grid grid-cols-[1fr_150px]">
      <div>
        <p className="font-medium text-slate-400">Total this month</p>
        <p className="font-medium mt-2.5 text-4xl">${sum}</p>
      </div>
      <div className="mt-3">
        <p className="text-end font-medium">+2.4%</p>
        <p className="text-end font-medium text-slate-400">from last month</p>
      </div>
    </div>
  );
}

export default Footer;
