import { useState } from "react";
import WindowTrack from "./WindowTrack";

export default function App() {
  const [show, seShow] = useState(true);
  function handleShow() {
    seShow(prevState => !prevState)
  }
  return (
    <div className="text-center">
      <button onClick={handleShow} className="bg-[#e9e9ed] py-3 px-10 rounded-md mb-5">
        Toggle Window Tracker
      </button>
      {show && <WindowTrack />}
    </div>
  );
}
