export default function Home({ startQuizFunction }) {
  return (
    <div className="home-container">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={startQuizFunction} className="btn">
        Start Quiz
      </button>
    </div>
  );
}
