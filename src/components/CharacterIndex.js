//characterindex

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Spinner from './Spinner'

import useSound from 'use-sound'
import WhatsYourName from '../sounds/WhatsYourName.mp3'


const CharacterIndex = () => {

  const [characters, setCharacters] = useState([])

  const [searchTerm, setSearchTerm] = useState('')

  const [isError, setIsError] = useState(false)

  const [whatsYourNamePlay] = useSound(WhatsYourName)

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character')
        setCharacters(data.results)

      } catch (err) {
        setIsError(true)
      }
    }
    getCharacters()
  }, [])

  const handleSubmit = () => {

  }


  return (
    <>
      <header>
        <h1>Search Character</h1>
      </header>
      <>

        <>
          <div className='form_container'>
            <form onSubmit={handleSubmit}>
              <input type='text' id='charactersubmit' onClick={whatsYourNamePlay} placeholder="Submit a Character" onChange={event => {
                setSearchTerm(event.target.value)
              }} ></input>
            </form>
          </div>
          <ul className='characters_list'>
            <div className='characters_container'>{characters && characters.filter((character) => {
              if (searchTerm === '') {
                return character
              } else if (character.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return character 
              }
            }).map(character => {
              const { name, image, species, status, gender, id } = character
              return (
                <Link key={id} id="character_link" to={`/character/${character.id}`}>
                  <div className="character_card" >
                    <div className="character-name" >{name}</div>
                    <div className="character-status">Status: {status}</div>


                    <div className={character.image}><img src={image} /></div>
                  </div>

                </Link>
              )
            })}
            </div>
          </ul>
        </>
        {
          isError ?
            <p>There was an Error!</p>
            :
            <>
            <Spinner />
            <div className = "spinner-text-wrapper">
            </div>
            </>
        }
      </>
    </>
  )


}


export default CharacterIndex