import { useState } from "react";
import './App.css';

function App() {

  const [name, setName] = useState("Ufuk");
  const [age, setAge] = useState(26);
  const [friends, setFriends] = useState(["Ahmet", "Mehmet"]);
  const [address, setAddress] = useState({ title: 'İstanbul', zip: 25456 });

  return (
    <div className="App">

      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}> Change Name</button>
      <button onClick={() => setAge(25)}> Change Age</button>

      <hr />

      <h2>Friends</h2>
      {
        friends.map((friend, index) => (
          <div key={index}>{friend}</div>
        ))
      }

      <button onClick={() => setFriends([...friends, "Ayşe"])}> Add New Friend</button>

      <hr />

      <h2>Address</h2>
      <div>
        {
          address.title + ' - '+ address.zip
        }
      </div>
      <button onClick={() => setAddress({...address, title : "Ankara"})}> Change Adress</button>

    </div>
  );
}

export default App;
