import { useState, useEffect } from "react";
import "./App.css";

import SingleCard from "./components/SingleCard.js";
import CARD_IMAGES_PL_CZ from "./source.js";

export default function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [translation, setTranslation] = useState(""); // Add state for translation

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...CARD_IMAGES_PL_CZ]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, key: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setTranslation(""); // Clear translation on new game
  };

  // Handle a choice
  const handleChoice = (card) => {
    playAudio(card.sound);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.id === choiceTwo.id) {
        // Update the matched state and translation
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.id === choiceOne.id) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setTranslation(`Matched: ${choiceOne.translation}`); // Set the translation here
        resetTurn();
      } else {
        setTranslation(""); // Clear the translation if cards do not match
        setTimeout(() => resetTurn(), 2000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Audio player
  const playAudio = (audio) => {
    const audioToPlay = new Audio(audio);
    audioToPlay.play();
  };

  // Reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>False Friends / Polish - Czech edition</h1>
      <div className="button">
        <button onClick={shuffleCards}>New Game</button>
      </div>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.key}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
      <p>Translation: {translation}</p> {/* Display the translation */}
    </div>
  );
}