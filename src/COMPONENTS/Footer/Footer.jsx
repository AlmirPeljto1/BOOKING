import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <img src="\img\Booking logo.png" alt="" className="footer-img" />
      <div className="footer-grid">
        <div className="f-grid1">
          <h4 className="grid-title1">Stranice</h4>
          <p>Naslovna</p>
          <p>O nama</p>
          <p>Kontakt</p>
        </div>
        <div className="f-grid2">
          <h4 className="grid-title2">Contact</h4>
          <p>+447894131</p>
          <p>contact@booking.ba</p>
          <p>Our Street 1A</p>
        </div>
        <div className="f-grid3">
          <h4 className="grid-title3">Community</h4>
          <div className="socials">
            <img src="\img\FB ico.png" alt="" />
            <img src="\img\TW ico.png" alt="" />
            <img src="\img\IG ico.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
