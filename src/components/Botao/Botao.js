import React, { useState } from 'react';
import axios from 'axios';

const Botao = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q={Osasco}&appid={6b754e23fe158f87a4fd15c392fcbba9}`
      ); // Substitua "{city}" pela cidade desejada e "{your_api_key}" pela sua chave da API do OpenWeather
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchWeatherData}>Previsão Tempo</button>
      {weatherData && (
        <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        // Esta é uma exibição simples dos dados da previsão do tempo. Você pode formatá-la conforme necessário.
      )}
    </div>
  );
};

export default Botao;
