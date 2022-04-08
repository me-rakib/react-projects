import { useEffect, useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'

export default function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function shuffleDice() {
    setDice((prevState) =>
      prevState.map((val) => ({
        ...val,
        value: val.isHeld ? val.value : Math.ceil(Math.random() * 6),
      }))
    );
  }

  function holdDice(id) {
    setDice((prevState) => {
      return prevState.map((val) => ({
        ...val,
        isHeld: val.id === id ? !val.isHeld : val.isHeld,
      }));
    });
  }

  const dieElement = dice.map((v) => (
    <Die key={v.id} value={v} holdDice={holdDice} />
  ));

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstVal = dice[0].value;
    const allSameVal = dice.every((die) => die.value === firstVal);
    if (allHeld && allSameVal) {
      setTenzies(true);
      console.log("You own");
    }
  }, [dice]);

  function resetGame() {
    setDice(allNewDice());
    setTenzies(false);
  }
  return (
    <main className="container">
      <div className="text-container">
        <h3>Tenzies</h3>
        <p>
          Roll untill all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="die">{dieElement}</div>
      {tenzies ? (
        <button onClick={resetGame} className="roll-btn">
          Reset
        </button>
      ) : (
        <button onClick={shuffleDice} className="roll-btn">
          Roll
        </button>
      )}
      {tenzies? <Confetti /> : ''}
    </main>
  );
}
