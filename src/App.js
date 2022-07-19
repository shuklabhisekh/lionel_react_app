import logo from "./logo.svg";
import "./App.css";
import { Output } from "./component/Output";
import { Input } from "./component/Input";
import Counter from "./component/Counter";

function App() {
  return (
    <div className="App">
      {/* <h2 className="compA">Component A</h2>
      <div className="comp">
        <Input />
        <Output />
      </div> */}
      <Counter />
    </div>
  );
}

export default App;
