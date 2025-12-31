import React from 'react'
import { useState } from 'react';

// function FormHandling(){
//     const [name,setName]= useState("");
//   return (
//     <div>
//         <input type="text" onChange={(e)=>setName(e.target.value)} />
//         <h3>hello form {name}</h3>
//     </div>
//   )
// }

// export default FormHandling;

export function FormHandling(){
    const[name,setName]=useState("");
    return(
        <div>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <h2>hello {name}</h2>
        </div>
    )
}