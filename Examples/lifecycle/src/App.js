import { useState, useEffect } from "react";
import Counter from "./components/Counter";

function App() {  

  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      { visible && <Counter/>}
       <button onClick={() => setVisible(!visible)}>Hidden</button>
    </div>
  );

}

export default App;
