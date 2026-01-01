
// import Counter from "./Counter";
// import FetchAPI from "./FetchAPI";
// import FormHandling from "./FormHandling";
// import ListRendering from "./ListRendering";
// import CondistionalRendring from "./CondistionalRendring";
// import ShowandHidePass from "./ShowandHidePass";
// import react from "react";
// import SearchFilterArr from "./SearchFilterArr";
// show me single page application means pages navigation using routes
// 
// ***************BrowserRouter example****************************************
import {Routes,Route,Link} from "react-router-dom";
import React from 'react'
import Counter from "./Counter";
import FormHandling from "./FormHandling";
import ListRendering from "./ListRendering";
import CondistionalRendring from "./CondistionalRendring";
import ShowandHidePass from "./ShowandHidePass";
import FetchAPI from "./FetchAPI";
import SearchFilterArr from "./SearchFilterArr";
const App = () => {

  
  return (
    <div>
    
      {/* <h1>Welcome to Counter App and Fetch API</h1> */}
      {/* <Counter />
      <FetchAPI />
      <FormHandling/>
      <ListRendering/>
      <CondistionalRendring/>
      <ShowandHidePass/>
      <SearchFilterArr/> */}
      <nav>
        <Link to="/">Counter</Link>|{" "}
        <Link to="/FormHandling">Form Handling</Link>|{" "}
        <Link to="/ListRendering">List Rendering</Link>|{" "}
        <Link to="/CondistionalRendring">Conditional Rendering</Link>|{" "}
        <Link to="/ShowandHidePass">Show and Hide Password</Link>|{" "}
        <Link to="/FetchAPI">Fetch API</Link>|{" "}
        <Link to="/SearchFilterArr">Search Filter Array</Link>
      </nav>



<Routes>
    <Route path="/"element={<Counter/>} />
    <Route path="/FormHandling"element={<FormHandling/>} />
    <Route path="/ListRendering"element={<ListRendering/>} />
    <Route path="/CondistionalRendring"element={<CondistionalRendring/>} />
    <Route path="/ShowandHidePass"element={<ShowandHidePass/>} />
    <Route path="/FetchAPI"element={<FetchAPI/>} />
    <Route path="/SearchFilterArr"element={<SearchFilterArr/>} />

</Routes>

     
    </div>
  );
};


export default App;
