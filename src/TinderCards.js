import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
    // eslint-disable-next-line
    const[people, _] = useState([
        {
            name: 'Frozen',
            url: 'https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810'
        },
        {
            name: 'Frozen',
            url: 'https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810'
        },
        {
            name: 'Frozen',
            url: 'https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810'
        },
        {
            name: 'Frozen',
            url: 'https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810'
        },
        {
            name: 'Frozen',
            url: 'https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810'
        },
    ]);
    return (
        <div>
            <hi></hi>
            <div className="tinderCardsContainer">
            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up']}
                >
                    <div
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default TinderCards;
