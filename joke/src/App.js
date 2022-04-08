import Joke from "./Joke";
import jokeData from "./jokeData";

export default function App() {
  const jokeElement = jokeData.map((j) => (
    <Joke key={j.id} setup={j.setup} punchline={j.punchline} />
  ));
  return <div className="container">{jokeElement}</div>;
}
