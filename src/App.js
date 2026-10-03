import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/counter";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div className="container">
        <h1>{count}</h1>
        <p className="message"></p>
        <button onClick={() => dispatch(decrement())} disabled={count === 0} className={`decrement-btn ${count === 0 ? 'disabled' : ''}`}>-</button>
        <button onClick={() => dispatch(increment())} className="increment-btn">+</button>
      </div>
    </div>
  );
}

export default App;
