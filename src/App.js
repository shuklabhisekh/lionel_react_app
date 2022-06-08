import logo from "./logo.svg";
import "./App.css";
import { Output } from "./component/Output";
import { Input } from "./component/Input";

function App() {
  return (
    <div className="App">
      <h2 className="compA">Component A</h2>
      <div className="comp">
        <Input />
        <Output />
      </div>
    </div>
  );
}

export default App;
