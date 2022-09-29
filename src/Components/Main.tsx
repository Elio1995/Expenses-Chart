import Footer from "./Footer";
import BarChart from "./BarChart";
import "../App.css";

function Main() {
  return (
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
      <Footer />
    </div>
  );
}

export default Main;
