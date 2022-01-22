import React, { useState } from "react";

export default function Points() {

  let [count, setCount] = useState(0);
  const increment100 = () =>setCount(count + 10);
  const decrement100 = () => setCount(count - 10);
  const increment500 = () => setCount(count + 50);
  const decrement500 = () => setCount(count - 50);
  const reset = () => setCount(0);

  return (
    <div className="Points-Container">
      <h3> Score : {count}</h3>
      <button className="Points-Buttons" onClick={increment100}>+ 10</button>
      <button className="Points-Buttons" onClick={decrement100}>- 10</button>
      <button className="Points-Buttons" onClick={increment500}>+ 50</button>
      <button className="Points-Buttons" onClick={decrement500}>- 50</button>
      <button className="Points-Buttons" onClick={reset}>reset</button>
    </div>
  );
}