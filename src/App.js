import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  // const [message, setMessage] = useState("");

  function incrementValue(){
    setCount(count + 1)
  }

  function decrementValue(){
    setCount(count - 1)
  }

  // function handleMessage(){

  // }

  console.log(count);
  return (
    <div className="App">
      <div className="container">
        <h1>{count}</h1>
        <p className="message"></p>
        <button onClick={decrementValue} className="decrement-btn">-</button>
        <button onClick={incrementValue} className="increment-btn">+</button>
      </div>
    </div>
  );
}

export default App;
