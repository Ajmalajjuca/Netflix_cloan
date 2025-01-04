import React, { useEffect, useState } from 'react'
import './Players.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Players = () => {
    const {id} = useParams()
    const navigare = useNavigate()
    const [apidata,setApidata]=useState({
        name:"",
        key:"",
        published_at:"",
        type:""
    })
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGFiNGU3NzI3YWU0YTZjYWJjODI2ZjFhZmIzYzg3MSIsIm5iZiI6MTczNDc2OTMyNS4zNDUsInN1YiI6IjY3NjY3YWFkOGNhNTNjYzZhNzVlMGM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-iuqn8uINulUPcLhqvzTmYtFz6qJbZMpsIR_cAlnmnE'
        }
      };
        useEffect(()=>{
            fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            
            .then(res => setApidata(res.results[0]))
            .catch(err => console.error(err));
            
        },[])
        
        
        
  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" onClick={()=>{navigare(-2)}} />
        <iframe width='90%' height='90%'
        src={`https://www.youtube.com/embed/${apidata.key}`}
         title='Trailer' style={{ border: "none" }} allowFullScreen></iframe>
      <div className="player_info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  )
}

export default Players
