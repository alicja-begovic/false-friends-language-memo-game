//import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import "./App.css";

import SingleCard from "./components/SingleCard.js";

import animal from "./assets/img/icon_animal.svg";
import animal2 from "./assets/img/icon_animal2.svg";
import human from "./assets/img/icon_human.svg";
import human2 from "./assets/img/icon_human2.svg";

import animal_czech from "./assets/sound/animal_czech.mp3";
import animal_english from "./assets/sound/animal_english.mp3";
import human_czech from "./assets/sound/human_czech.mp3";
import human_english from "./assets/sound/human_english.mp3";

const CARD_IMAGES = [
  {id: '001', src: animal, matched: false, sound: animal_czech},
  {id: '001', src: animal2, matched: false, sound: animal_english},
  {id: '002', src: human, matched: false, sound: human_czech},
  {id: '002', src: human2, matched: false, sound: human_english}
]


function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...CARD_IMAGES]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, key: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
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
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 2000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>Language challenge German - Dutch</h1>
      <button onClick={shuffleCards}>New Game</button>
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
    </div>
  );
}

export default App();


/*

// function App() {
//   let soundOne = new Audio(animal_czech);
//   let soundTwo = new Audio(animal_english);
//   let soundThree = new Audio(human_czech);
//   let soundFour = new Audio(human_english);

//   const startOne = () => {
//     soundOne.play();
//   };
//   const startTwo = () => {
//     soundTwo.play();
//   };
//   const startThree = () => {
//     soundThree.play();
//   };
//   const startFour = () => {
//     soundFour.play();
//   };

//   return (
//     <>
//       <div>
//         <img src={animal} alt="Animal One" onClick={startOne} />
//       </div>
//       <div>
//         <img src={animal2} alt="Animal Two" onClick={startTwo} />
//       </div>
//       <div>
//         <img src={human} alt="Human One" onClick={startThree} />
//       </div>
//       <div>
//         <img src={human2} alt="Human Two" onClick={startFour} />
//       </div>
//     </>
//   );
// }

// export default App;

*/
