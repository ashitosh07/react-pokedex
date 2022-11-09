import React from 'react'
// import { useGlobalContext } from '../context'

const SearchForm = (props) => {
  const [search, setSearch] = React.useState('')
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search your favourite Pokemon</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className='btn' onClick={(e) => props.getPokemon(search)}>
            Search
          </button>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
