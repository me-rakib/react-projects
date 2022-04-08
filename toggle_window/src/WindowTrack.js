import { useEffect, useState } from "react";

export default function WindowTrack() {
  const [windoSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    function watchWidth() {
        console.log("Setting up")
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    return function () {
      console.log("cleaning up");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);
  return (
    <p className="text-white text-2xl capitalize font-bold text">
      Window width {windoSize}
    </p>
  );
}
