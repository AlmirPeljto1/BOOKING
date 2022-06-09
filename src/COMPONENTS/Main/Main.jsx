import { useState } from "react";
import "./Main.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
export const Main = () => {
  const [drop1, setDrop1] = useState(false);
  const [value, onChange] = useState(new Date());
  const [calendar, setCalendar] = useState(false);
  const [people, setPeople] = useState(false);
  return (
    <div className="main-container">
      <img
        src="\img\Landing header img.png"
        alt="main img"
        className="main-img"
      />
      <div className="main-wrapper">
        <div className="main-text">
          <h1 className="main-title">Booking service</h1>
          <p className="main-parag">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            consequat augue eros. Quisque eget libero tristique, lacinia dui
            maximus, tempor dolor.
          </p>
        </div>
        <div className="main-section">
          <div className="section-parag">
            <p className="section-out">Smještaji</p>
            <p className="section-in">Atrakcije</p>
          </div>
          <div className="main-selects">
            <div className="section-option1" onClick={() => setDrop1(!drop1)}>
              <p className="sec-title1">ODABERI DESTINACIJU</p>
              {drop1 ? (
                <div className="dest-grupa">
                  <div className="dest-drop">
                    <img
                      src="\img\map marker ico.png"
                      alt=""
                      className="dest-image"
                    />
                    <p className="dest-ime">Sarajevo</p>
                    <p className="dest-cijena">24 KM</p>
                  </div>
                  <hr className="hrdrop" />
                  <div className="dest-drop1">
                    <img
                      src="\img\map marker ico.png"
                      alt=""
                      className="dest-image"
                    />
                    <p className="dest-ime">Zenica</p>
                    <p className="dest-cijena1">80 KM</p>
                  </div>
                  <hr className="hrdrop1" />
                  <div className="dest-drop2">
                    <img
                      src="\img\map marker ico.png"
                      alt=""
                      className="dest-image"
                    />
                    <p className="dest-ime">Doboj</p>
                    <p className="dest-cijena2">120 KM</p>
                  </div>
                  <hr className="hrdrop2" />
                  <div className="dest-drop3">
                    <img
                      src="\img\map marker ico.png"
                      alt=""
                      className="dest-image"
                    />
                    <p className="dest-ime">Tešanj</p>
                    <p className="dest-cijena3">100 KM</p>
                  </div>
                </div>
              ) : (
                <p className="sec-parag1">Sarajevo</p>
              )}
            </div>
            <div
              className="section-option2"
              onClick={() => setCalendar(!calendar)}
            >
              <div className="sec-g">
                <p className="sec-title1">ODABERI DATUM</p>
                <p className="sec-parag1">18 Apr - 20 Apr</p>
                {calendar ? (
                  <div className="calendar">
                    <Calendar onChange={onChange} value={value} />
                  </div>
                ) : (
                  ""
                )}
              </div>
              <img src="\img\Path 848.png" alt="" className="sec-svg" />
            </div>
            <div className="section-option1" onClick={() => setPeople(!people)}>
              <p className="sec-title1">BROJ OSOBA</p>
              <p className="sec-parag2">
                <span className="minus">-</span> 5{" "}
                <span className="plus">+</span>
              </p>
              {people ? (
                <div className="add-hide">
                  <div className="add-drop">
                    <PeopleOutlineOutlinedIcon className="add-image" />
                    <p className="add-text">Broj odraslih</p>
                    <p className="add-numb">
                      <span className="minus">-</span> 3{" "}
                      <span className="plus">+</span>
                    </p>
                  </div>
                  <div className="add-drop1">
                    <ChildFriendlyIcon className="add-image" />
                    <p className="add-text">Broj djece</p>
                    <p className="add-numb1">
                      <span className="minus">-</span> 2{" "}
                      <span className="plus">+</span>
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="section-search">
            <div className="section-wrapper">
              <p className="search-p">Traži</p>
              <img src="\img\Path 847.png" alt="img" className="search-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
