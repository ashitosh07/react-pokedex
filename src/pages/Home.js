import React, { useState } from 'react'
import PokemonList from '../components/PokemonList'
import SearchForm from '../components/SearchForm'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../auth/firebase'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { fetchPokemon } from '../services/getPokemon'
import Loading from './Loading'
const Home = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const logOut = () => {
    auth.signOut()
    navigate('LoginReg')
  }

  const [pokemon, setPokemon] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const getPokemon = async (query) => {
    if (!query) {
      setErrorMsg('You must enter a Pokemon')
      setError(true)
      return
    }
    setError(false)
    setLoading(true)
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query)
        const results = await response.json()
        console.log(results)
        console.log(response)
        setPokemon(results)
        setLoading(false)
      } catch (err) {
        console.log(err)
        setLoading(false)
        setError(true)
        setErrorMsg('Pokemon not found.')
      }
    }, 1500)
  }

  return (
    <>
      <div className='log-out'>
        {user ? (
          <div>
            <h2 className='user'>Welcome :{user?.email}</h2>
            <button className='logOut-btn' onClick={() => logOut()}>
              Logout
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      <div>
        <SearchForm getPokemon={getPokemon} />
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : null}

        {!loading && pokemon ? (
          <PokemonList
            name={pokemon.name}
            sprite={pokemon.sprites.other.dream_world.front_default}
            abilities={pokemon.abilities}
            stats={pokemon.stats}
            species={pokemon.species}
            // types={pokemon.types}
            type={pokemon.types[0].type.name}
            order={pokemon.order}
            game_indices={pokemon.game_indices}
            height={pokemon.height}
            weight={pokemon.weight}
            egg_groups={pokemon.egg_groups}
            moves={pokemon.moves
              .map((move) => move.move.name)
              .slice(0, 20)
              .join(', ')}
          />
        ) : null}
      </div>
    </>
  )
}

export default Home
