import { createContext, useState } from 'react';

const FilterContext = createContext({
  selectedFilterValue: 'All',
  selectFilter: (value) => {}
})

export function FilterContextProvider(props) {
  const [selectedFilterValue, setSelectedFilter] = useState('All')

  function selectedFilterHandler(value) {
    setSelectedFilter(value)
  }

  const context = {
    selectedFilterValue: selectedFilterValue,
    selectFilter: selectedFilterHandler
  }

  return <FilterContext.Provider value={context}>
    {props.children}
  </FilterContext.Provider>
}

export default FilterContext;
