import logo from "../../images/logo.svg";
import "../App.css";

function Header() {
  return (
    <div
      style={{
        backgroundColor: "hsl(10, 79%, 65%)",
      }}
      className="grid grid-cols-[1fr_50px] p-5 rounded-2xl"
    >
      <div className="text-start">
        <p className="text-base font-medium">My balance</p>
        <p className="text-2xl font-semibold m-1">$921.48</p>
      </div>
      <div className="grid place-content-center">
        <img src={logo}></img>
      </div>
    </div>
  );
}

export default Header;
