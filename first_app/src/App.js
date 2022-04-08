import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false)

  function handleDark() {
    setDark(prevState => !prevState)
  }

  return (
    <main className={dark? "dark" : ""}>
      <div className="container">
        <p className="toggle-light">Light</p>
        <div onClick={handleDark} className="toggler--slider">
          <div className="toggle-slider-circle"></div>
        </div>
        <p className="toggle-dark">Dark</p>
      </div>
    </main>
  );
}
