import {useState} from "react";

export default function App() {
  const [count, setCount]= useState(0)

  function addOne(){
    setCount(count + 1);
    if (count > 50) {
      console.log("WOW");
    }
  }

  function minusOne(){
    setCount(count - 1);
  }

  function reset(){
    setCount(0);
  }

  

  return (<div>
    <h1>useState & Hook</h1>
    <p onClick={reset}>{count}</p>
    <p>Click number to reset!</p>
    <div className="button-container">
    <button onClick={addOne}>Increase by 1</button>
    <button onClick={minusOne}>Decrease by 1</button>
    </div>
  </div>
  );
}
