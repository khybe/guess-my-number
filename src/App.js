import { useState } from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

import classes from "./App.module.css";

function App() {
  const [userPlay, setUserPlay] = useState(true);
  const [number, setNumber] = useState(0);
  let [score, setScore] = useState(20);
  let [highScore, setHighScore] = useState(0);
  let [message, setMessage] = useState("Start guessing...");
  const [win, setWin] = useState(false);
  let userGuess;

  const againHandler = () => {
    console.log("Again is clicked!");

    setScore(20);
    setWin(false);
    setUserPlay(true);
    setMessage("Start guessing...");

    const randomNumber = Math.floor(Math.random() * 20 + 1);
    console.log("Random number is: " + randomNumber);
    setNumber(randomNumber);
  };

  const handleSubmit = (guess) => {
    userGuess = Number(guess);
    console.log("userGuess is: " + userGuess);

    if (userGuess === number) {
      setWin(true);
      setUserPlay(false);
      setMessage("🎉 Correct Number!");
      if (score > highScore) {
        setHighScore(score);
      }
    } else if (userGuess > number) {
      console.log("User guess is higher than number.");

      setMessage("📈 Too High!");
      setScore((prevState) => prevState - 1);
    } else if (userGuess < number) {
      console.log("User guess is lower than number.");

      setScore((prevState) => prevState - 1);

      setMessage("📉 Too low!");
    } else if (userGuess > 20 || userGuess < 1) {
      setMessage("Enter valid number (20 to 1)");
    }

    console.log("Number is: " + number);
    console.log("Score is: " + score);
    console.log("Check is Clicked!");
  };

  return (
    <div className={win ? classes.won : ""}>
      <Header onAgain={againHandler} number={number} won={win} />
      <MainPage
        onSubmit={handleSubmit}
        message={message}
        score={score}
        highScore={highScore}
      />
    </div>
  );
}

export default App;
