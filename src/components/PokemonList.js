import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import { useGlobalContext } from '../context'
// import { Link } from 'react-router-dom'
import Loading from '../pages/Loading'

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6',
}

const PokemonList = (props) => {
  const { toggle, toggleTab } = useGlobalContext()
  const style = `app-body-content-thumbnail ${props.type}`
  return (
    <div key={props.id} className='app-body'>
      <div className='app-body-content'>
        {/* <!-- app body thumbnail --> */}
        <div className={style}>
          <img src={props.sprite} alt={props.name} />
        </div>
        {/* <!-- end of app body thumbnail --> */}

        <div className='app-body-content-list'>
          <div className='name'>{props.name}</div>

          {/* <!-- tabs head --> */}
          <div className='app-body-tabs-head'>
            <button
              type='button'
              className={
                toggle === 1 ? 'tab-head-single active-tab' : 'tab-head-single'
              }
              onClick={() => toggleTab(1)}
            >
              <span>Base Stats</span>
            </button>

            <button
              type='button'
              className={
                toggle === 2 ? 'tab-head-single active-tab' : 'tab-head-single'
              }
              onClick={() => toggleTab(2)}
            >
              <span>About</span>
            </button>
            <button
              type='button'
              className={
                toggle === 3 ? 'tab-head-single active-tab' : 'tab-head-single'
              }
              onClick={() => toggleTab(3)}
            >
              <span>Moves</span>
            </button>
          </div>
          {/* <!-- end of tabs head --> */}

          {/* <!-- tabs body --> */}
          <div className='app-body-tabs-body'>
            {/* <!-- powerstats tab --> */}
            <ul
              className={
                toggle === 1
                  ? 'tab-body-single powerstats show-tab'
                  : 'tab-body-single powerstats'
              }
            >
              <li>
                <i className='fa-solid fa-shield-halved'></i>
                {props.stats.map((stat, key) => (
                  <div key={key} className='power'>
                    <strong>{stat.stat.name}</strong>
                    <ProgressBar
                      now={stat.base_stat}
                      max={255}
                      label={stat.base_stat}
                    />
                  </div>
                ))}
              </li>
            </ul>

            {/* <!-- appearance --> */}
            <ul
              className={
                toggle === 2
                  ? 'tab-body-single appearance show-tab'
                  : 'tab-body-single appearance'
              }
            >
              <li>
                <span>
                  <i className='fas fa-star'></i> Species
                </span>
                <span>{props.species.name}</span>
              </li>

              <li>
                <span>
                  <i className='fas fa-star'></i> Height
                </span>
                <span>{props.height}</span>
              </li>
              <li>
                <span>
                  <i className='fas fa-star'></i> Weight
                </span>
                <span>{props.weight}</span>
              </li>
              <li>
                <span>
                  <i className='fas fa-star'></i>Abilities
                </span>
                {props.abilities.map((ability, key) => {
                  return <span key={key}>{ability.ability.name}</span>
                })}
              </li>
              <li>
                <span>
                  <i className='fas fa-star'></i> order
                </span>
                <span>{props.order}</span>
              </li>
            </ul>
            {/* <!-- end of appearance --> */}

            {/* <!-- connections --> */}
            <ul
              className={
                toggle === 3
                  ? 'tab-body-single connections show-tab'
                  : 'tab-body-single connections'
              }
            >
              <li>
                <span>Moves</span>
                <span className='move'>{props.moves}</span>
              </li>
            </ul>
            {/* <!-- end of connections --> */}
          </div>
          {/* <!-- end of tabs body --> */}
        </div>
      </div>
    </div>
  )
}

export default PokemonList
