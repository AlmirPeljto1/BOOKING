import "./Prijedlog.css";
import BedroomChildOutlinedIcon from "@mui/icons-material/BedroomChildOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
const cards = [
  {
    id: 1,
    src: "/img/Sarajevo small img.png",
    broj: 980,
    happy: 214,
    mjesto: "Sarajevo",
  },
  {
    id: 2,
    src: "/img/Zenica small img.png",
    broj: 450,
    happy: 80,
    mjesto: "Zenica",
  },
  {
    id: 3,
    src: "/img/Travnik small img.png",
    broj: 214,
    happy: 112,
    mjesto: "Travnik",
  },
  {
    id: 4,
    src: "/img/Banja Luka small img.png",
    broj: 670,
    happy: 178,
    mjesto: "Banja Luka",
  },
];
const semiCards = [
  {
    id: 5,
    src: "/img/Tuzla small img.png",
    broj: 341,
    happy: 44,
    mjesto: "Tuzla",
  },
  {
    id: 6,
    src: "/img/Mostar small img.png",
    broj: 826,
    happy: 194,
    mjesto: "Mostar",
  },
  {
    id: 7,
    src: "/img/Trebinje small img.png",
    broj: 324,
    happy: 180,
    mjesto: "Trebinje",
  },
  {
    id: 8,
    src: "/img/Neum small img.png",
    broj: 1158,
    happy: 55,
    mjesto: "Neum",
  },
];
const Card = ({ src, broj, mjesto, happy }) => {
  return (
    <div className="prijedlog-card">
      <div className="prijedlog-wrapp">
        <img src={src} alt="img" className="prijedlog-img" />
        <div className="prijedlog-status">
          <h3 className="prijedlogTitle">{mjesto}</h3>
          <div className="prijedlog-cardRating">
            <BedroomChildOutlinedIcon className="small-img" />
            <p className="prijedlog-rating">{broj}</p>
          </div>
          <div className="prijedlog-cardStatus">
            <SentimentSatisfiedOutlinedIcon className="small-img" />
            <p className="prijedlog-ratingStatus">{happy}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Prijedlog = () => {
  return (
    <div className="prijedlog-container">
      <h1 className="prijedlog-naslov">
        Ne znate gdje da putujete? Imamo prijedlog
      </h1>
      <div className="prijedlog-grid">
        {cards.map((card) => {
          return (
            <Card
              src={card.src}
              happy={card.happy}
              mjesto={card.mjesto}
              broj={card.broj}
              key={card.id}
            />
          );
        })}
      </div>
      <div className="prijedlog-grid2">
        {semiCards.map((card) => {
          return (
            <Card
              src={card.src}
              happy={card.happy}
              mjesto={card.mjesto}
              broj={card.broj}
              key={card.id}
            />
          );
        })}
      </div>
    </div>
  );
};
