import "./Smjestaji.css";

const cards = [
  {
    id: 1,
    src: "/img/Hotel Kont Residence img.png",
    name: "Hotel Kont Residence",
  },
  { id: 2, src: "/img/EM Apartment img.png", name: "Apartmani Seyda" },
  { id: 3, src: "/img/Apartmani Seyda img.png", name: "Apartmani Seyda" },
  {
    id: 4,
    src: "/img/Promenade Inn by img.png",
    name: "Promenade Inn by ZETTA hotel residence",
  },
  {
    id: 5,
    src: "/img/Hostel Franz Ferdinand img.png",
    name: "Hostel Franz Ferdinand",
  },
];

const Card = ({ src, name }) => {
  return (
    <div className="grid-card">
      <div className="grid-wrapp">
        <img src={src} alt="img" className="grid-img" />
        <div className="grid-cardRating">
          <img src="\img\star ico.png" alt="star" className="grid-star" />
          <p className="grid-rating">8.3</p>
        </div>
      </div>
      <h2 className="grid-name">{name}</h2>
      <p className="grid-price">120 KM</p>
      <div className="grid-location">
        <img src="\img\map marker ico.png" alt="marker" className="img-locat" />
        <p className="card-location">Sarajevo</p>
      </div>
    </div>
  );
};

export const Smjestaji = () => {
  return (
    <div className="smjestaji-container">
      <h1 className="smjestaji-title">Smještaji u tvojoj blizini</h1>
      <div className="smjes-grid">
        {cards.map((card) => {
          return <Card src={card.src} name={card.name} key={card.id} />;
        })}
      </div>
    </div>
  );
};
