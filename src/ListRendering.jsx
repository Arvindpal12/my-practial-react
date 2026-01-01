//qustion ko ghooma kr bhi bol sakte h ki  (write a array in ui)
// LISTRENDRING jb use krte h hm jb hame apne data ko ui pr show kranan hota with the help of array and map function 
import React from "react";

// function ListRendering() {
//   const fruits = ["Apple", "Banana", "Mengo"];

//   return (
//     <div>
//       <ul>
//         {fruits.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListRendering;

function ListRendering(){
  const fruits=["mango","apple","graphs"];
  return(
    <div>
      <ul>
        {fruits.map((item,index) =>(
          <li key={index}>{item}</li>

        ))}
      </ul>
    </div>
  )
}
export default ListRendering;
