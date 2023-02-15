import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

import classes from "./App.module.css";

function App() {
  const initPlay = {
    userPlay: true,
    number: 0,
    score: 20,
    highScore: 0,
    message: "Start guessing...",
    win: false,
  };
  const [play, setPlay] = useState(initPlay);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 20 + 1);

    setPlay((obj) => ({
      ...obj,
      number: randomNumber,
    }));
  }, []);

  let userGuess;

  const againHandler = () => {
    console.log("Again is clicked!");

    const randomNumber = Math.floor(Math.random() * 20 + 1);
    console.log("Random number is: " + randomNumber);

    setPlay({
      ...play,
      score: 20,
      win: false,
      userPlay: true,
      message: "Start guessing...",
      number: randomNumber,
    });
  };

  const handleSubmit = (guess) => {
    userGuess = Number(guess);
    console.log("userGuess is: " + userGuess);

    if (userGuess === play.number) {
      setPlay({
        ...play,
        win: (play.win = true),
        userPlay: false,
        message: (play.message = "🎉 Correct Number!"),
      });

      if (play.score > play.highScore) {
        setPlay({
          ...play,
          highScore: play.score,
        });
      }
    } else if (userGuess > play.number) {
      console.log("User guess is higher than number.");
      setPlay({
        ...play,
        message: (play.message = "📈 Too High!"),
        score: play.score - 1,
      });
    } else if (userGuess < play.number) {
      console.log("User guess is lower than number.");

      setPlay({
        ...play,
        message: "📉 Too low!",
        score: play.score - 1,
      });
    } else if (userGuess > 20 || userGuess < 1) {
      setPlay({
        ...play,
        message: "Enter valid number (20 to 1)",
      });
    }

    console.log("Number is: " + play.number);
    console.log("Score is: " + play.score);
    console.log("Check is Clicked!");
  };

  return (
    <div className={play.win ? classes.won : ""}>
      <Header onAgain={againHandler} number={play.number} won={play.win} />
      <MainPage
        onSubmit={handleSubmit}
        message={play.message}
        score={play.score}
        highScore={play.highScore}
      />
    </div>
  );
}

export default App;

// 1# Conditionally changing classes (i.e, the won class, whitin App.js).

// 2# Lefting the state up, from child to a parent component (i.e, from MainPage.js to App.js).

// 3# State management of a complex object (i.e, play state whitin App.js).
