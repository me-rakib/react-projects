import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Quiz from "./Components/Quiz";
import axios from "axios";
import Home from "./Components/Home";
import buttom_left from "./bottom-left.png";
import topRight from "./top-right.png"

export default function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [page, setPage] = useState(0);

  const [quiz, setQuiz] = useState([
    // {
    //   id: nanoid(),
    //   question: "Question",
    //   correctAns: "Hello",
    //   options: ["Hello", "Hello World", "Helll Lowww LLL"],
    //   selected: "",
    // },
    // {
    //   id: nanoid(),
    //   question: "Question",
    //   correctAns: "True",
    //   options: ["True", "False", "C"],
    //   selected: "",
    // },
  ]);

  const [score, setScore] = useState({
    userScore: "",
    showScore: false,
  });

  useEffect(() => {
    if (startQuiz) {
      axios.get("https://opentdb.com/api.php?amount=5").then((data) =>
        data.data.results.map((val) =>
          setQuiz((prevState) => [
            ...prevState,
            {
              id: nanoid(),
              question: val.question,
              correctAns: val.correct_answer,
              options: [...val.incorrect_answers, val.correct_answer]
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value),
              selected: "",
            },
          ])
        )
      );
    }
  }, [page]);

  function selectAns(event, id) {
    const selectValue = event.target.innerText;
    setQuiz((prevState) =>
      prevState.map((val) =>
        val.id === id ? { ...val, selected: selectValue } : val
      )
    );
  }

  const quizElements = quiz.map((val) => (
    <Quiz key={val.id} value={val} selectAns={selectAns} score={score} />
  ));

  function checkAnswer() {
    let score = 0;
    quiz.map((val) => (val.correctAns === val.selected ? score++ : ""));

    setScore({
      userScore: score,
      showScore: true,
    });
  }

  function playAgain() {
    setScore({
      userScore: "",
      showScore: false,
    });
    setPage((prevState) => (prevState += 1));
    setQuiz([]);
  }

  function startQuizFunction() {
    setStartQuiz(true);
    setPage((prevState) => (prevState += 1));
  }

  return (
    <>
      <img class="buttom-left" src={buttom_left} alt="buttom-left" />
      <img class="top-right" src={topRight} alt="top-right" />
      {!startQuiz ? (
        <Home startQuizFunction={startQuizFunction} />
      ) : (
        <div>
          {quizElements}
          <div className="btn-container">
            {score.showScore ? (
              <div className="play-again-btn-container">
                <p>You scored {score.userScore}/5 correct answers</p>
                <button onClick={playAgain} className="btn">
                  Play Again
                </button>
              </div>
            ) : (
              <button onClick={checkAnswer} className="btn">
                Check Answers
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
