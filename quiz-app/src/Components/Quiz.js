export default function Quiz(props) {
  const { value, selectAns, score } = props;
  function getClass(correctAns, selected, v, showScore) {
    if (correctAns === v && showScore) {
      return "correct";
    } else if (selected === v && showScore) {
      return "wrong";
    } else if (selected === v && !showScore) {
      return "selected";
    }
  }
  return (
    <div className="quiz-container">
      <h3>{value.question}</h3>
      <div className="answers">
        {value.options.map((v) => (
          <p
            className={`q-option ${getClass(
              value.correctAns,
              value.selected,
              v,
              score.showScore
            )}`}
            onClick={(event) => selectAns(event, value.id)}
            key={v}
          >
            {v}
          </p>
        ))}
      </div>
      <hr />
    </div>
  );
}

// ${value.selected === v ? "selected" : ""}
// ${score.showScore && value.selected === v ? 'wrong' : ''}
// ${score.showScore && value.correctAns === v ? 'correct' : ''}
