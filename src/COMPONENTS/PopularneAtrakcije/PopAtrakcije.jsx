import "./PopAtrakcije.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const cards = [
  {
    id: 1,
    src: "/img/Jajce img (2).png",
    name: "Obilazak Travnika i Jajca uz tradicionalni ručak",
    mjesto: "Jajce",
  },
  {
    id: 2,
    src: "/img/Lukomir img (2).png",
    name: "Obilazak sela Lukomir",
    mjesto: "Lukomir",
  },
  {
    id: 3,
    src: "/img/Mostar img (2).png",
    name: "Jednodnevni obilazak grada Mostara i Hercegovine",
    mjesto: "Mostar",
  },
];

const Card = ({ src, name, mjesto }) => {
  return (
    <div className="pop-card">
      <div className="pop-wrapp">
        <img src={src} alt="img" className="pop-img" />
        <h3 className="popTitle">{name}</h3>
        <div className="pop-cardRating">
          <LocationOnOutlinedIcon className="pop-star" />
          <p className="pop-rating">{mjesto}</p>
        </div>
      </div>
    </div>
  );
};

export const PopAtrakcije = () => {
  return (
    <div className="pop-container">
      <h1 className="pop-title">Popularne Atrakcije</h1>
      <div className="pop-grid">
        {cards.map((card) => {
          return (
            <Card
              src={card.src}
              name={card.name}
              key={card.id}
              mjesto={card.mjesto}
            />
          );
        })}
      </div>
    </div>
  );
};
