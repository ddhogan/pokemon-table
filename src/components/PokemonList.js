import { useState, useEffect, useContext } from 'react';
import FilterContext from '../store/filterContext';
import PaginatedTable from './PaginatedTable';

function PokemonList(props) {

  const [filteredList, setFilteredList] = useState([]);

  const filterCtx = useContext(FilterContext);

  useEffect(() => {
    if (filterCtx.selectedFilterValue === null || filterCtx.selectedFilterValue === 'All') {
      setFilteredList(props.pokemons)
    } else {
      const filteredList = [];
      props.pokemons.forEach(p => p.pokemonType.filter(t => {
        if (t.type.name === filterCtx.selectedFilterValue) {
          filteredList.push(p)
        } return null
      }))
      setFilteredList(Array.from(new Set(filteredList)))
    }
  }, [filterCtx.selectedFilterValue, props.pokemons])

  return (
    <PaginatedTable pokemons={filteredList}/>
  )
}

export default PokemonList;
