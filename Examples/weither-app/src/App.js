import './App.css';
import Header from './component/Header';
import WeatherList from './component/WeatherList'
import { WeatherListProvider } from './context/WeatherListContext';

function App() {
  return (
    <WeatherListProvider>
      <div className="App">
        <Header/>
        <WeatherList/>
      </div>
    </WeatherListProvider>
  );
}

export default App;
