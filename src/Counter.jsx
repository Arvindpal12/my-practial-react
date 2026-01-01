// I make a counter appp using react in useState hook first of all a what is useState hook is 
// that a allow us to add state to functional components 
// isme hm useState hook ka use krte h taki iske through hm component ka data ko update or manage kr ske 

import { useState } from "react";
import React from 'react'

function Counter() {
    const [count,setCount]=useState(0);
  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increse+</button>
        <button onClick={()=>setCount(count-1)}>Decrese-</button>
    </div>
  )
}

export default Counter;

