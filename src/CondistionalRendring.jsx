// conditional rendring me kya h na ki hm isme ek conditional appply krte h with the help of ternory oprator  means if and else ki condition apply krte h 

import React from 'react';

// function CondistionalRendring() {
//     const isLogin= true;
//   return (
//     <div>
//         {isLogin ? <h2>welcome</h2>:<h2>plse Login</h2>}
//     </div>
//   );
// }

// export default CondistionalRendring

function CondistionalRendring(){
    const PlseLog=true;
    return(
        <div>
        {PlseLog ? <h2>Thanks for Logged</h2>:<h2>Plse Login</h2>}
        </div>
    )
}
export default CondistionalRendring