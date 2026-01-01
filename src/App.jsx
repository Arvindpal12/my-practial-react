
import Counter from "./Counter";
import FetchAPI from "./FetchAPI";
import FormHandling from "./FormHandling";
import ListRendering from "./ListRendering";
import CondistionalRendring from "./CondistionalRendring";
import react from "react";

const App = () => {

  
  return (
    <div>
    
      <h1>Welcome to Counter App and Fetch API</h1>
      <Counter />
      <FetchAPI />
      <FormHandling/>
      <ListRendering/>
      <CondistionalRendring/>
    </div>
  );
};


export default App;
