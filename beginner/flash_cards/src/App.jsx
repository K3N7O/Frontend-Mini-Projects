import { useState } from "react";
import "./App.css";
import CardContainer from "./components/flashCardContainer.jsx";
import Card from "./components/Card.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import Navigation from "./components/Navigation.jsx";
import info from "./data/information.json";

function App() {
  console.log(7 % info.length);

  const [current, setCurrent] = useState(0);
  const [state, setState] = useState(false);

  function handleDirect(direction) {
    direction
      ? setCurrent((prev) => (prev + 1) % info.length)
      : setCurrent((prev) => (prev - 1 + info.length) % info.length);
    setState(false);
  }
  function toggle() {
    setState((prev) => !prev);
  }
  return (
    <>
      <main>
        <h1>FlashCards</h1>
        <CardContainer>
          <ProgressBar />
          <Card details={info[current]} state={state} />
          <Navigation
            onClick={toggle}
            onDirect={handleDirect}
            value={current}
          />
        </CardContainer>
      </main>
    </>
  );
}

export default App;
