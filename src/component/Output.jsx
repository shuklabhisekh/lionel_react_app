import { useSelector } from "react-redux";
import "../css/Output.css";
export function Output() {
  const text = useSelector((store) => store.text);
  return (
    <div className="compC">
      <h2>Component C</h2>

      <div>Output : {text}</div>
    </div>
  );
}
