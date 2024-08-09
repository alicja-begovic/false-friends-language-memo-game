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
  const [player1, setPlayer1] = useState({ name: "Player 1", score: 0 });
  const [player2, setPlayer2] = useState({ name: "Player 2", score: 0 });
  const [currentPlayer, setCurrentPlayer] = useState(1);

  // Shuffle cards
  const shuffleCards = () => {
    // Extract unique pairs
    const uniquePairs = [];
    const uniqueIds = new Set();
    
    CARD_IMAGES_PL_CZ.forEach((card) => {
      if (!uniqueIds.has(card.id)) {
        const pair = CARD_IMAGES_PL_CZ.filter((c) => c.id === card.id);
        uniquePairs.push(pair);
        uniqueIds.add(card.id);
      }
    });
  
    // Randomly select 12 pairs
    const selectedPairs = uniquePairs
      .sort(() => Math.random() - 0.5)
      .slice(0, 9);
  
    // Flatten the selected pairs into a single array and shuffle
    const selectedCards = selectedPairs.flat().sort(() => Math.random() - 0.5).map((card) => ({ ...card, key: Math.random() }));
  
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(selectedCards);
    setTurns(0);
    setTranslation(""); // Clear translation on new game
    setPlayer1({ ...player1, score: 0 });
    setPlayer2({ ...player2, score: 0 });
    setCurrentPlayer(1);
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
        setTranslation(`Translation: ${choiceOne.translation} - ${choiceTwo.translation}`); // Set the translation here
        // Update score for the current player
        if (currentPlayer === 1) {
          setPlayer1({ ...player1, score: player1.score + 1 });
        } else {
          setPlayer2({ ...player2, score: player2.score + 1 });
        }
        resetTurn();
      } else {
        setTranslation(""); // Clear the translation if cards do not match
        setTimeout(() => {
          setCurrentPlayer(currentPlayer === 1 ? 2 : 1); // Switch player
          resetTurn();
        }, 2000);
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
      <div className="players">
        <div className={`player ${currentPlayer === 1 ? "active" : ""}`}>
          <input
            type="text"
            value={player1.name}
            onChange={(e) => setPlayer1({ ...player1, name: e.target.value })}
          />
          <p>Score: {player1.score}</p>
        </div>
        <div className={`player ${currentPlayer === 2 ? "active" : ""}`}>
          <input
            type="text"
            value={player2.name}
            onChange={(e) => setPlayer2({ ...player2, name: e.target.value })}
          />
          <p>Score: {player2.score}</p>
        </div>
      </div>
      <div className="button">
        <button onClick={shuffleCards}>New Game</button>
      </div>
      <div className="card-grid">
        {cards.map((card, index) => (
          <SingleCard
            key={card.key}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
            index={index} // Pass the index to SingleCard
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
      <p>{translation}</p> {/* Display the translation */}
    </div>
  );
}