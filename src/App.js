import './App.css';
import React, { useState } from 'react';
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import Botao from './components/Botao/Botao';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="app">
      <Input
        type="text"
        placeholder="Digite a cidade!"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Botao>Enviar</Botao>
      <Card cidade={inputValue} />
      <Card
        imageUrl="https://example.com/image.jpg"
        title="Example Card"
        description={inputValue} // Use the input value as the card description
      />
    </div>
  );
};

export default App;

