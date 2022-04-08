import { useState } from "react";
export default function App() {
  const [isGoingOut, setIsGoingOut] = useState(true);
  function changeMind() {
    setIsGoingOut((prevState) => !prevState);
  }
  return (
    <div className="container">
      <h1>Do I feel like going out tonight?</h1>
      <div onClick={changeMind} className="btn">
        <h2>{isGoingOut ? "YES" : "NO"}</h2>
      </div>
    </div>
  );
}
