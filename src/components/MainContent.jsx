import React, { useEffect, useState } from 'react';
import "./mainContent.css";
import Collection from './Collection';
import Card from './Card';
import Button from './Button';

export default function MainContent({ setCards, cards }) {

  const [availableOnly, setAvailableOnly] = useState(false);


  const handleShowAll = () => {
    setAvailableOnly(false);
  };

  const handleShowAvailable = () => {
    setAvailableOnly(true);
  };

  const fetchCards = () => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCards(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCards();
  }, []);

  // Filter cards based on availability
  const filteredCards = availableOnly ? cards.filter(card => card.available) : cards;

  useEffect(() => {
    console.log("Cards after fetch:", cards);
    console.log("Filtered cards:", filteredCards);
  }, [cards, filteredCards]);

  return (
    <div className='flex'>
      <div className="centerBox">
        <Collection />
        <div className="flex">
          <Button onClick={handleShowAll} buttonText={"All Products"} active={!availableOnly} />
          <Button onClick={handleShowAvailable} buttonText={"Available Now"} active={availableOnly}/>
        </div>
        <div className="container">
          {filteredCards.map((cardObj) => (
            <div className="card" key={cardObj.name}>
              <Card {...cardObj} setCards={setCards} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
