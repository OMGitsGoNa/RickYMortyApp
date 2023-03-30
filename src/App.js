import { useState } from 'react';
import './App.css';
import { Personajes } from './components/Personajes';
import ImageRickMorty from './img/rick-morty.png';
function App() {
  const [personajes, setPersonajes] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setPersonajes(characterApi.results);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick y Morty</h1>
        {personajes ? (
          <Personajes characters={personajes} setCharacters={setPersonajes} />
        ) : (
          <>
          <img src={ImageRickMorty} alt="Rick y Morty" className='img-home'></img>
          <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
