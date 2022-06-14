import { useState } from "react";

import classes from "./MainPage.module.css";

const MainPage = ({ onSubmit, message, score, highScore }) => {
  const [guess, setGuess] = useState("");
  return (
    <main className={classes.main}>
      <section className={classes.left}>
        <input
          type="number"
          className={classes.guess}
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        ></input>
        <button
          // type="button"
          className={classes.check}
          onClick={() => onSubmit(guess)}
        >
          Check!
        </button>
      </section>
      <section className={classes.right}>
        <p className={classes.message}>{message}</p>
        <p className={classes.score}>
          💯 Score: <span className={classes.score}>{score}</span>
        </p>
        <p className={classes["high-score"]}>
          🥇 Highscore: <span>{highScore}</span>
        </p>
      </section>
    </main>
  );
};

export default MainPage;
