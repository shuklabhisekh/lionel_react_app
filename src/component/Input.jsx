import { useState } from "react";
import { useDispatch } from "react-redux";
import { getInput } from "../redux/Input/inputAction";

export function Input() {
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    // setText(e.target.value);
    dispatch(getInput(e.target.value));
  };
  return (
    <div>
      <h2>Component B</h2>
      <label>Input : </label>
      <input
        type="text"
        placeholder="Type here"
        id="name"
        onChange={handleChange}
      />
    </div>
  );
}
