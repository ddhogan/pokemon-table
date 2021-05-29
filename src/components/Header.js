import { useRef, useContext } from 'react';
import FilterContext from '../store/filterContext';

function Header(props) {
  const filterCtx = useContext(FilterContext);
  
  const POKEMONS = props.pokemons;

  const totalWeight = POKEMONS.reduce((sum, currentValue) => sum + currentValue.weight, 0)
  const meanWeight = (totalWeight / POKEMONS.length) || 0;

  const maxExpVal = Math.max(...POKEMONS.map(p => p.base_experience))
  const maxExpPokemon = POKEMONS.find(p => p.base_experience === maxExpVal)

  const TYPES = POKEMONS.map(p => p.pokemonType.map(t => (t.type.name)))
  const typesList = Array.from(new Set(TYPES.flat()));

  const filterRef = useRef()

  function submitHandler(event) {
    event.preventDefault()
    const selectedType = filterRef.current.value;
    filterCtx.selectFilter(selectedType);
  }

  return (
    <header>
      <ul>
        <li>Average <mark>Weight</mark>: {meanWeight} hectograms</li>
        <li>Most <mark>Base Experience</mark>: {maxExpPokemon.name}: {maxExpVal}</li>
      </ul>
      <form onSubmit={submitHandler}>
        <label htmlFor="type">Filter by type</label>
        <select id="type" name="type" ref={filterRef}>
          <option value={null}>All</option>
          {typesList.map(type => {
            return <option key={type} value={type}>{type}</option>
          })}
        </select>
        <button type="submit"><b>Filter</b></button>
      </form>
    </header>
  )
}

export default Header;
