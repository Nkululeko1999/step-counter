import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function incrementValue(){
    setCount(count + 1)
  }

  function decrementValue(){
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>{count}</h1>
        <p className="message"></p>
        <button onClick={decrementValue} disabled={count === 0} className={`decrement-btn ${count === 0 ? 'disabled' : ''}`}>-</button>
        <button onClick={incrementValue} className="increment-btn">+</button>
      </div>
    </div>
  );
}

export default App;
