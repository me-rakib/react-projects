import { useState } from "react";
import Box from "./Box";
import boxdata from "./boxes";

export default function App() {
  const [data, setData] = useState(boxdata);

  function changeData(id) {
    setData((prevState) =>
      prevState.map((val) => (val.id === id ? { ...val, on: !val.on } : val))
    );
  }

  const boxElement = data.map((val) => (
    <Box key={val.id} status={val.on} handleClick={()=>changeData(val.id)} />
  ));

  return <div>{boxElement}</div>;
}
