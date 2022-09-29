import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import "./App.css";

export interface EXPENSE {
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
      <Header />
      <Main />
    </div>
  );
}

export default App;
