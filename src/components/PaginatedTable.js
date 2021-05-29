import { useState, useEffect } from 'react';
import TableRow from './TableRow';

function PaginatedTable(props) {
  const [currentPage, setCurrentPage] = useState(0);

  const pageSize = 20
  const numberOfPages = Math.ceil(props.pokemons.length/pageSize)
  let offset = currentPage * pageSize;

  const slicedList = [...props.pokemons.slice(offset, (offset + pageSize))]

  useEffect(() => {
    setCurrentPage(0)
  }, [props.pokemons.length])

  function pageHandler(direction) {
    if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(currentPage - 1)
    } else if ((direction === 'next') && (currentPage < numberOfPages-1)) {
      setCurrentPage(currentPage + 1)
    }
    else return null
  }

  return (
    <div>
      <p>Displaying {props.pokemons.length} Pokémons</p>
      <div className="button-group">
        <button onClick={() => pageHandler('prev')}>Prev Page</button>
        <button onClick={() => pageHandler('next')}>Next Page</button>
      </div>
      <table className="hoverable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height (decimetres)</th>
            <th>Weight (hectograms)</th>
            <th>Abilities</th>
          </tr>
        </thead>
          <tbody>
          {slicedList.map((pokemon) => {
            return <TableRow key={pokemon.id} pokemon={pokemon}/>
          })}
        </tbody>
      </table>
    </div>

  )
}

export default PaginatedTable;