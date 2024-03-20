import { useState, useEffect } from 'react'
import './styles/style.css'
import WeatherHeader from './components/WeatherHeader';
import WeatherBody from './components/WeatherBody';

function App() {
  const [currCity, setCurrCity] = useState('Madrid');
  const [units, setUnits] = useState('metric');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getWeather(currCity, units);
  }, [currCity, units]); 

  const getWeather = async (city, unit) => {
    const appId = '659e25a8946a734503d3eb434209084a';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=${unit}`);
    const data = await response.json();
    setWeatherData(data);
  };

  const handleSearch = (city) => {
    setCurrCity(city);
  };

  const handleUnitChange = (newUnit) => {
    setUnits(newUnit);
  };

  return (
    <div className="container">
      <WeatherHeader onSearch={handleSearch} onUnitChange={handleUnitChange} units={units} />
      {weatherData && <WeatherBody weatherData={weatherData} units={units} />}
    </div>    
  )
}

export default App
