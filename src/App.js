//import logo from './logo.svg';
import { useState, useEffect } from "react";
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
// import correct_ding from "./assets/sound/correct_ding.mp3";
// import wrong_ding from "./assets/sound/wrong_ding.mp3";

const CARD_IMAGES = [
  { id: "001", src: animal, matched: false, sound: animal_czech },
  { id: "001", src: animal2, matched: false, sound: animal_english },
  { id: "002", src: human, matched: false, sound: human_czech },
  { id: "002", src: human2, matched: false, sound: human_english },
];

export default function App() {
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

  // let correct_answer = new Audio(correct_ding);
  // let wrond_ding = new Audio(wrong_ding);

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

  // const handleCardClick = (cardId) => {
  //   // Play sound
  //   const card = cards.find((card) => card.id === cardId);
  //   console.log(card)
  //   const sound = new Audio(card.sound);
  //   sound.play();
  // };

  const handleCardClick = (clickedCard) => {
    // Play the associated sound when card is clicked
    const audio = new Audio(clickedCard.sound);
    audio.play();
  };

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

  // let correct_sound = new Audio(correct_ding);
  // let wrong_sound = new Audio(wrong_ding);

  // if (choiceOne === choiceTwo) {
  //   correct_sound.play();
  // } else {
  //   wrong_sound.play()
  // }

  // if (choiceOne !== choiceTwo) {
  //   wrong_sound.play()
  // }

  return (
    <div className="App">
      <h1>Language challenge English - Czech</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.key}
            card={card}
            sound={card.sound}
            handleChoice={handleChoice}
            onClick={handleCardClick}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

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
