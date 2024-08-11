import { useState } from "react";

function App() {

  const [counter, setCounter] =useState(15)

  // let counter = 15;

  const addValue=()=>{
    // counter++;
    if(counter<20){ 
      setCounter(counter+1)
    }
  }

  const decreaseValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value :{counter}</h2>

      <button onClick={addValue}>Add</button>
      <button onClick={decreaseValue}>Decrease</button>
    </>
  )
}

export default App
