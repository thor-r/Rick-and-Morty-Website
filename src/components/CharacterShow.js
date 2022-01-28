import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import mortyImg from '../images/DiscoMorty1.gif'

const CharacterShow = () => {

  const [character, setCharacter] = useState([])

  // const [ hasError, setHasError ] = useState({ error: false, message: '' })

  const [location, setLocation] = useState([])

  const [episode, setEpisode] = useState([])


  const { characterId } = useParams()

  useEffect(() => {

    const getSingleCharacter = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
        setCharacter(data)
        setLocation(data.location)
        setEpisode(data.episode)
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getSingleCharacter()
  }, [characterId])



  return (
    <>
      {character, location, episode ?
        <div className="characterProfile">
        <div><img src={character.image} alt={name} /></div>
        <div className="character-info">Name: <span className='nameColor'>{character.name}</span> <br></br><br></br>  Species: <span className='nameColor'>{character.species}</span> <br></br><br></br>  Gender: <span className='nameColor'>{character.gender}</span> <br></br><br></br>  Status: <span className='nameColor'>{character.status}</span> <br></br> <br></br> Last known location:  <span className='nameColor'>{location.name}</span> <br></br><br></br> Number of Episodes:  <span className='nameColor'>{episode.length}</span> </div>
        {/* <div className = "mortyclass"><img src={mortyImg} alt="" id="morty" /> </div> */}

      </div>
      : <p>Error</p>
      }
    </>
  )
}

export default CharacterShow
