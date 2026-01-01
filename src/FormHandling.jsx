// formhandling ka use hm jb krte h jb hme user  ki enter ki gyi value ko ui pr show krn aho ya fir kahi bhajna ho tb use krte h though a onChange function use krka or evennt use kr ka 


import React from 'react'
import { useState } from 'react';

function FormHandling(){
    const [name,setName]= useState("");
  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <h3>hello form {name}</h3>
    </div>
  )
}

export default FormHandling;

// export function FormHandling(){
//     const[name,setName]=useState("");
//     return(
//         <div>
//             <input type="text" onChange={(e)=>setName(e.target.value)} />
//             <h2>hello {name}</h2>
//         </div>
//     )
// }