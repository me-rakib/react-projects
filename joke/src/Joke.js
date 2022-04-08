import { useState } from "react";
export default function Joke(props) {
  const [isShown, setIsShown] = useState(false);

  function toggle() {
    setIsShown((prevState) => !prevState);
  }
  return (
    <div className="joke-container">
      <p>{props.setup}</p>
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggle}>{isShown? "Hide" : "Show"} Punchline</button>
    </div>
  );
}
