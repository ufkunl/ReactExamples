import logo from './logo.svg';
import './App.css';
import { useState,useCallback } from "react";
import Header from "./component/Header";

function App() {

  const [number,setNumber] = useState(0);

  // const increment = useCallback(() => {
  //   setNumber((prevState) => prevState + 1);
  // },[])

  // Eğer bir componente method geçirecek isek bu şekilde geçirmek gerekir.

  return (
    <div className="App">
        <Header number= {number > 5 ? number: 0 }/>

        <h1>{number}</h1>
        <button onClick={()=> setNumber(number + 1)}>Arttır</button>
    </div>
  );
}

export default App;
