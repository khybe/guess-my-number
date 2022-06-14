import classes from "./Header.module.css";

const Header = ({ number, onAgain, won }) => {
  return (
    <header className={classes.header}>
      <h1>Guess My Number!</h1>
      <button className={classes.again} onClick={onAgain}>
        Again!
      </button>
      <p className={classes.between}>(Between 1 and 20)</p>
      <div className={classes.number}>{won ? number : "?"}</div>
    </header>
  );
};

export default Header;
