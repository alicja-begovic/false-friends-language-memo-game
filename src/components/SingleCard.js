import cover2 from "../assets/img/cover_false_friends.svg";
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled, index }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <div className="back" onClick={handleClick}>
          <img src={cover2} alt="card back" />
          <div className="card-number">{index + 1}</div> {/* Display the index, +1 to make it 1-based */}
        </div>
      </div>
    </div>
  );
}