import capitalize from "../Utilities/Utilities";
import css from "./Options.module.css";
import clsx from "clsx";

const Options = ({ options, handleIncrement, totalFeedback, handleReset }) => {
  return (
    <div className={css.buttonsContainer}>
      {options.map((option_i) => (
        <button
          key={option_i}
          onClick={() => handleIncrement(option_i)}
          className={css.btn}
        >
          {capitalize(option_i)}
        </button>
      ))}
      {totalFeedback !== 0 && (
        <button
          key="reset"
          onClick={handleReset}
          className={clsx(css.btn, css.resetBtn)}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
