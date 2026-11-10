import { useState } from "react";
import "./App.css";
import CardContainer from "./components/FlashCardContainer.jsx";
import Card from "./components/Card.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import Navigation from "./components/Navigation.jsx";
import info from "./data/information.json";

function App() {
  const [current, setCurrent] = useState(0);
  const [state, setState] = useState(false);

  function handleNavigate(direction) {
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
<<<<<<< HEAD
          <ProgressBar currentValue={current} total={info.length} />
          <Card details={info[current]} state={state} />
          <Navigation onClick={toggle} onDirect={handleDirect} />
=======
          <ProgressBar
            currentIndex={info[current].id}
            totalIndex={info.length}
          />
          <Card details={info[current]} state={state} />
          <Navigation onClick={toggle} onDirect={handleNavigate} />
>>>>>>> 049ecb651ef23beffc2730e9b019d5e4108db45c
        </CardContainer>
      </main>
    </>
  );
}

export default App;
