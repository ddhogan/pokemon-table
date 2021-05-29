function TableRow(props) {
  return (
    <tr key={props.pokemon.id}>
      <td data-label="Name">
        {props.pokemon.id}: {props.pokemon.name}
        <img src={props.pokemon.thumbnail} alt={`Thumbnail of ${props.pokemon.name}`}/>
      </td>
      <td data-label="Height">{props.pokemon.height}</td>
      <td data-label="Weight">{props.pokemon.weight}</td>
      <td data-label="Abilities">{props.pokemon.abilities.map(a => a.ability.name).join(", ")}</td>
    </tr>
  )
}

export default TableRow;
