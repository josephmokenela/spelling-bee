import { useContext } from "react";
import { useId } from "react";
import { CounterDispatchContext } from "../contexts/context";
import { TabContext } from "../contexts/context";

export function Counter({ counter }) {
  const counterDispatch = useContext(CounterDispatchContext);
  const visibleTab = useContext(TabContext);
  const id = useId();

  function handleIncrementClick(event) {
    counterDispatch({
      type: 'increment',
      id: counter.id
    });
    event.preventDefault();
  }

  function handleDecrementClick(event) {
    counterDispatch({
      type: 'decrement',
      id: counter.id
    });
    event.preventDefault();
  }

  return (
    <fieldset className="counter" id={id}>
      <legend className="counter__legend">{counter.name.longName}</legend>
      {counter.total > 0 ? (
        <button
          className="button"
          onClick={handleDecrementClick}
          aria-label="Decrease Counter"
          id={id + "-decrement"}
        >
          -
        </button>
      ) : (
        <div className="counter__empty"></div>
      )}
      <p aria-labelledby={id + "-legend"}>{counter.total}</p>
      <button
        className="button"
        onClick={handleIncrementClick}
        aria-label="Increase Counter"
        id={id + "-increment"}
      >
        +
      </button>
    </fieldset>
  );
}