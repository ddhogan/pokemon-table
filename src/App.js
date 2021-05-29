import { useEffect, useState } from 'react';
import PokemonList from './components/PokemonList';
import Header from './components/Header';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [allPokemons, setAllPokemons] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    let i;
    const pokemons = [];
    (async function loop() {
      for (i = 1; i < 61; i++) {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(data => {
          const pokemon = {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            abilities: data.abilities,
            pokemonType: data.types,
            base_experience: data.base_experience,
            thumbnail: data.sprites.front_default
          }
          pokemons.push(pokemon)
          setAllPokemons(pokemons)
        })
        .catch(error => {
          console.log(error)
          setErrorMessage(`We didn't catch 'em all: ${errorMessage}, please try again later.`)
        })
      }
    })()
    setIsLoading(false);
  }, [isLoading, errorMessage])

  return (
    <div>
      <h1>Top 60 Pokémon!</h1>
      {(!isLoading && allPokemons.length > 0) ? (
        <section>
          <Header pokemons={allPokemons}/>
          <PokemonList pokemons={allPokemons}/>
        </section>
      ) : (
        <section>
          <p>One moment while we Gotta Catch 'em All</p>
          <div className="spinner secondary"></div>
        </section>
      )}
      {errorMessage}
    </div>
  );
}

export default App;
