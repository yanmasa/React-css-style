import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p>- Inline Styles -</p>
      <button>FIGHT</button>
    </div>
  );
};
