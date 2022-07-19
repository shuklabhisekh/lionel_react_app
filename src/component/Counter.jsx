import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const changeCount = (inp) => {
    setCount(count + inp);
  };

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => changeCount(2)}>+</button>
      <button
        disabled={count <= 0 ? true : false}
        onClick={() => changeCount(-1)}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
