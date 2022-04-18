import imageRick from './img/rick-morty.png'; //Se importa nuestra imagen de la carpeta img
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  {/*Se crea nuestro boton*/}
  const reqApi = async () => {
    {/*Se consume la API*/}
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterapi = await api.json();

    setCharacters(characterapi.results);
  };


  return (
    <div className="App">
      <header className="App-header">
       <h1 className='title'>Rick & Morty</h1>

       {/*Se manda a llamar nuestro componente*/}
       {characters ? (
         <Characters characters={characters} setCharacters={setCharacters}/>
       ) : (
         <>
         {/*Se manda a llamar nuestra imagen*/}
       <img src={imageRick} alt='rick' className='img-home'></img>

       {/*Se manda a llamar nuestro boton*/}
       <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
        </>
       )}
       
      </header>
    </div>
  );
}

export default App;
