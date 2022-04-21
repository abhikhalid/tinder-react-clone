import React, { useEffect, useState } from 'react';

import './TinderCards.css';

import TinderCard from 'react-tinder-card';

import { db } from './firebase';

const TinderCards = () => {

    const [people, setPeople] = useState([]);


    // Piece of code which runs based on condition
    useEffect(() => {

        //this is where the code runs...

        db.collection('people').onSnapshot(snapshot => {

            setPeople(snapshot.docs.map(doc => doc.data()));
        })


    }, []); // [] , this will run once when the component loads, and never runs again




    return (
        <div>
            {/* <h1>Tinder cards</h1> */}


            <div className="tinderCards__cardContainer">
                {
                    people.map(person => (
                        <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwipe={['up', 'down']}
                        >
                            <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                                <h3>{person.name}</h3>
                            </div>

                        </TinderCard>
                    ))}
            </div>



        </div>
    );
};


export default TinderCards;