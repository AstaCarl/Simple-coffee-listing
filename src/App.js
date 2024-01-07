import "./App.css";
import "./styles.css";
import BackgroundImg from "./components/BackgroundImg";
import MainContent from "./components/MainContent";
import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState([]);

  const fetchCards = () => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="App">
      <div className="backgroundImg">
        <BackgroundImg />
      </div>
      <div className="mainContent">
        <MainContent cards={cards}>
          {cards.map((cardObj) => (
            <Card key={cardObj.name} {...cardObj} setCards={setCards} />
          ))}
        </MainContent>
      </div>
    </div>
  );
}

export default App;
