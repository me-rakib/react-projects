import { useState } from "react";
import Count from "./Count";

export default function App() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(prevState => prevState+1);
  }

  function subtract() {
    setCount(prevState => prevState-1);
  }

  return (
    <div className="container">
      <div className="counter">
        <Count number={count}/>
      </div>

      <div className="btn-container">
        <div onClick={subtract} className="btn">
          <p>-</p>
        </div>
        <div onClick={add} className="btn">
          <p>+</p>
        </div>
      </div>
    </div>
  );
}
