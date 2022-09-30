import Footer from "./Footer";
import BarChart from "./BarChart";
import "../App.css";

function Main() {
  return (
    <div className="mt-5 text-start text-black bg-white p-5 rounded-2xl">
      <p className="text-2xl font-semibold mb-5">Spending - Last 7 days</p>
      <BarChart />
      <hr className="mt-6" />
      <Footer />
    </div>
  );
}

export default Main;
