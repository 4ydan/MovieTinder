import React from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";


export default function Trending() {
    // eslint-disable-next-line
    let [movieID, setId] = useState(615457)
    let [page, setPage] = useState(1)
    let count = 0
    let url_begin = `https://api.themoviedb.org/3/movie`
    let url_end = `/popular?&api_key=7cf77b2fecb0e4e630aa326f9eaafbe3&language=en-US&page=`
    // eslint-disable-next-line
    const onSwipe = (direction, id) => {
        count++
        if (direction === "right") {
        }
        if (count === 20){
            count = 0
            setMovie([])
            setPage(page + 1)
        }
      }
    const[response, setMovie] = useState([]);
    useEffect(() => {
        async function fetchUrl() {
            const response = await fetch(url_begin + url_end + page);
            const json = await response.json();
            setMovie(json);
      }
        fetchUrl();
        // eslint-disable-next-line
      }, [page]);
    if (response.results && response.results.length > 0) {
        return (
            <div className="tinderCardsContainer">
                {response.results.map(movie => (
                <TinderCard
                    className="swipe"
                    key={movie.id}
                    flickOnSwipe="false"
                    preventSwipe={['up']}
                    onSwipe={(dir) => onSwipe(dir, movie.id)}
                >
                    <div
                        style={{ backgroundImage: `url(${'https://image.tmdb.org/t/p/w780' + movie.poster_path})` }}
                        className="card"
                        
                    >
                        <h3>{ movie.title }</h3>
                        <h4>{ movie.vote_average }</h4>
                    </div>
                </TinderCard>
            ))}
            </div>
        );
    }
    return (
        <div className="tinderCardsContainer">
        </div>
    );
}

