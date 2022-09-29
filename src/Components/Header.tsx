import logo from "../../images/logo.svg";
import "../App.css";

function Header() {
  return (
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
  );
}

export default Header;
