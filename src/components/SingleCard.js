//import cover from "../assets/img/cover.svg";
import cover2 from "../assets/img/cover_false_friends.svg";
import "./SingleCard.css";

export default function SingleCard(
  { card, handleChoice, flipped, disabled },
  props
) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src={cover2}
          onClick={handleClick}
          alt="card back"
        />
        <audio src={props.sound} />
      </div>
    </div>
  );
}
