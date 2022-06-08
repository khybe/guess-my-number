import classes from "./MainPage.module.css";

const MainPage = () => {
  return (
    <main className={classes.main}>
      <section className={classes.left}>
        <input type="number" className={classes.guess}></input>
        <button type="button" className={classes.check}>
          Check!
        </button>
      </section>
      <section className={classes.right}>
        <p className={classes.message}>Start guessing...</p>
        <p className={classes.score}>
          💯 Score: <span className={classes.score}> 20</span>
        </p>
        <p className={classes["high-score"]}>
          🥇 Highscore: <span> 0</span>
        </p>
      </section>
    </main>
  );
};

export default MainPage;
