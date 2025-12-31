// I make a counter appp using react in useState hook first of all a what is useState hook is 
// that a allow us to add state to functional components 

import { useState } from "react";
import React from 'react'

function Counter() {
    const [count,setcount]=useState(0);
  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={()=>setcount(count+1)}>Increse+</button>
        <button onClick={()=>setcount(count-1)}>Decrese-</button>
    </div>
  )
}

export default Counter;