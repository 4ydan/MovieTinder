import React, {useState } from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { useFetch } from "./apihook";


export default function TinderCards() {
    let url = `https://api.themoviedb.org/3/movie/popular?&api_key=7cf77b2fecb0e4e630aa326f9eaafbe3`
    const[people, setPeople] = useFetch(url)
    console.log(people.results)
    if (people.results && people.results.length > 0) {
        return (
            <div className="tinderCardsContainer">
                {people.results.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.id}
                    flickOnSwipe="false"
                    preventSwipe={['up']}
                >
                    <div
                        style={{ backgroundImage: `url(${'https://image.tmdb.org/t/p/w500' + person.poster_path})` }}
                        className="card"
                        
                    >
                        <h3></h3>
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

