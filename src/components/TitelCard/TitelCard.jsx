import React, { useEffect, useRef, useState } from 'react'
import './TitelCard.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitelCard = ({ title, category }) => {
    const [apiData, setApidata] = useState([])
    const cardRef = useRef()
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGFiNGU3NzI3YWU0YTZjYWJjODI2ZjFhZmIzYzg3MSIsIm5iZiI6MTczNDc2OTMyNS4zNDUsInN1YiI6IjY3NjY3YWFkOGNhNTNjYzZhNzVlMGM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-iuqn8uINulUPcLhqvzTmYtFz6qJbZMpsIR_cAlnmnE'
        }
    };


    const handelWeel = (event) => {
        event.preventDefault();
        cardRef.current.scrollLeft += event.deltaY
    }
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())

            .then(res => setApidata(res.results))

            .catch(err => console.error(err));


        cardRef.current.addEventListener('wheel', handelWeel);
    }, [])
    return (
        <div className='Titel-Card'>
            <h2>{title ? title : "Populor on Netflix"}</h2>
            <div className="card-list" ref={cardRef}>
                {apiData.map((card, index) => {
                    return <Link to={`/player/${card.id}`} className='card' key={index}>
                        <img src={'https://image.tmdb.org/t/p/w500/' + card.backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default TitelCard
