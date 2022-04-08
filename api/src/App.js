import { useState, useEffect } from "react";

export default function App() {
  const [startData, setStarData] = useState({});
  const [count, setCount] = useState(1)

  useEffect(() => {
    console.log("hello")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarData(data));
  }, [count]); // [] - dependency array, [prevstate] ==[prevstate] then no update, if [prevstate] == [newstate] update 

  function updateCount() {
    setCount(prevState => prevState + 1)
  }

  return (
    <div>
      <p>Count {count}</p>
      <button onClick={updateCount}>Get Next</button>
      <pre>{JSON.stringify(startData, null, 2)}</pre>
    </div>
  );
}
