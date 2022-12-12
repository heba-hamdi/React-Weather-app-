import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e1a7a58254fbee42c20cd1f2ad0d2b5b`;

  const getData = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)

      })
    }
  }




  return (
    <div className="app">
      <div className="search">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} onKeyUp={getData} placeholder="Enter Location" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{Math.round((data.main.temp - 32) * 5 / 9)} °C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p>{Math.round((data.main.feels_like - 32) * 5 / 9)} °C</p> : null}
            <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed}MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
