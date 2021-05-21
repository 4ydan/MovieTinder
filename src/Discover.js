import React from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";


export default function Discover() {
    // eslint-disable-next-line
    let [movieID, setId] = useState(615457)
    // eslint-disable-next-line
    let [page, setPage] = useState(1)
    let count = 0
    let url_begin = `https://api.themoviedb.org/3/movie/`
    let url_end = `/similar?&api_key=7cf77b2fecb0e4e630aa326f9eaafbe3&language=en-US&page=`
    // eslint-disable-next-line
    const onSwipe = (direction, id) => {
        count++
        if (direction === "right") {
            setId(id)
        }
        if (count === 20){
            count = 0
            setPeople([])
            setPage(page + 1)
        }
      }
    const[people, setPeople] = useState([]);
    useEffect(() => {
        async function fetchUrl() {
            const response = await fetch(url_begin + movieID + url_end + page);
            const json = await response.json();
            setPeople(json);
      }
        fetchUrl();
        // eslint-disable-next-line
      }, [page]);
    if (people.results && people.results.length > 0) {
        return (
            <div className="tinderCardsContainer">
                {people.results.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.id}
                    flickOnSwipe="false"
                    preventSwipe={['up']}
                    onSwipe={(dir) => onSwipe(dir, person.id)}
                >
                    <div
                        style={{ backgroundImage: `url(${'https://image.tmdb.org/t/p/w780' + person.poster_path})` }}
                        className="card"
                    >
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

