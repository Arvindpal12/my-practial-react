import {useState} from 'react'

// function ShowandHidePass() {
//     const [Show,setShow]=useState(true);
//   return (
//     <div>
//         <input type={Show?"password":"text"} />
//         <button onClick={()=>setShow(!Show)}>{Show?"Hide":"Show"}</button>
//     </div>
//   )
// }

// export default ShowandHidePass

function ShowandHidePass(){
    const[Show,setShow]=useState(true);
    return(
       <div>
        <input type={Show ? "text": "passWord"} />
        <button onClick={()=>setShow(!Show)}>Toggle</button>
        
       </div>

    )
}
export default ShowandHidePass