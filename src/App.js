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
  const [translation, setTranslation] = useState("");
  const [player1, setPlayer1] = useState({ name: "Player 1", score: 0 });
  const [player2, setPlayer2] = useState({ name: "Player 2", score: 0 });
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [difficulty, setDifficulty] = useState("easy"); // Add state for difficulty

  // Shuffle cards based on difficulty level
  const shuffleCards = () => {
    const uniquePairs = [];
    const uniqueIds = new Set();

    CARD_IMAGES_PL_CZ.forEach((card) => {
      if (!uniqueIds.has(card.id)) {
        const pair = CARD_IMAGES_PL_CZ.filter((c) => c.id === card.id);
        uniquePairs.push(pair);
        uniqueIds.add(card.id);
      }
    });

    let numPairs;
    if (difficulty === "easy") {
      numPairs = 6; // 12 cards total
    } else if (difficulty === "medium") {
      numPairs = 9; // 18 cards total
    } else if (difficulty === "hard") {
      numPairs = 12; // 24 cards total
    }

    const selectedPairs = uniquePairs
      .sort(() => Math.random() - 0.5)
      .slice(0, numPairs);

    const selectedCards = selectedPairs
      .flat()
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, key: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(selectedCards);
    setTurns(0);
    setTranslation("");
    setPlayer1({ ...player1, score: 0 });
    setPlayer2({ ...player2, score: 0 });
    setCurrentPlayer(1);
  };

  const handleChoice = (card) => {
    playAudio(card.sound);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.id === choiceTwo.id) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.id === choiceOne.id) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setTranslation(
          `Translation: ${choiceOne.translation} - ${choiceTwo.translation}`
        );
        if (currentPlayer === 1) {
          setPlayer1({ ...player1, score: player1.score + 1 });
        } else {
          setPlayer2({ ...player2, score: player2.score + 1 });
        }
        resetTurn();
      } else {
        setTranslation("");
        setTimeout(() => {
          setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
          resetTurn();
        }, 2000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const playAudio = (audio) => {
    const audioToPlay = new Audio(audio);
    audioToPlay.play();
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, [difficulty]); // Shuffle cards when the difficulty changes

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
      <div className="difficulty-buttons">
        <button onClick={() => setDifficulty("easy")}>Easy</button>
        <button onClick={() => setDifficulty("medium")}>Medium</button>
        <button onClick={() => setDifficulty("hard")}>Hard</button>
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
            index={index}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
      <p>{translation}</p>
    </div>
  );
}
