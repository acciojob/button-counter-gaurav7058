
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count,setCount]=useState(0)
  function counter(){
    setCount(count+1)
  }
  return (
    <div>
       <p>Button clicked {count} times.</p>
       <button onClick={counter}>Click Me</button>
    </div>
  )
}

export default App
