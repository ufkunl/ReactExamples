import './App.css';
import User from './components/User';

function App() {


 const friends= [
    {
      id:1,
      name :'Ahmet'
    },
    {
      id:2,
      name :'Tayfun'
    },
    {
      id:3,
      name :'Gokhan'
    },
    {
      id:4,
      name :'Ayşe'
    }
  ];

  return (
    <>
      <User 
        name="Ufuk" 
        surname = "Ünal" 
        isLoggedIn = {true} 
        age={26}
        friends={friends}
        adress={{
          title: "Ataşehir",
          zip: 304545
        }}/>
    </>
  );
}

export default App;
