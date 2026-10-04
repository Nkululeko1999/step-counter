import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, updateStep } from "./store/counterSlice";

function App() {
  const { count, step } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleStepChange = (e) => {
    const stepValue = parseInt(e.target.value, 10);
    dispatch(updateStep(stepValue));
  };

  return (
    <div className="App">
      <div className="container">
        <h1>{count}</h1>
        <p clasreset-btnsName="message"></p>
        <button
          onClick={() => dispatch(decrement())}
          disabled={count - step < 0}
          className={`decrement-btn ${count - step < 0 ? "disabled" : ""}`}
        >
          -
        </button>
        <button onClick={() => dispatch(increment())} className="increment-btn">
          +
        </button>

        <div className="step-amount-selector">
          <select className="step-amount-select" onChange={handleStepChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="step-counter-controls">
          <button
            onClick={() => dispatch({ type: "counter/reset" })}
            className="reset-btn"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
