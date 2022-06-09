import { useState } from "react";
import "./Navbar.css";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="navbar-container">
      <img src="\img\Booking logo.png" alt="logo" className="nav-logo" />
      <div className="wrapper">
        <div className="nav-parag">
          <p>Naslovna</p>
          <p>O nama</p>
          <p>Kontakt</p>
        </div>
        <div className="nav-leng">
          <p>BIH</p>
          <p className="styled-p">EN</p>
        </div>
        <div className="circle-nav" onClick={() => setMenu(!menu)}>
          {menu ? (
            <>
              <AccountCircleOutlinedIcon className="nav-search blue new" />
              <div className="menu-exp">
                <div className="item1">
                  <PermIdentityOutlinedIcon className="itemImg" />
                  <p className="itemName">Profil</p>
                </div>
                <hr className="hr1" />
                <div className="item2">
                  <AddLocationOutlinedIcon className="itemImg blue" />
                  <p className="itemName">Dodaj novi objekat</p>
                </div>
                <hr className="hr2" />
                <div className="item3">
                  <LogoutOutlinedIcon className="itemImg" />
                  <p className="itemName">Odjavi se</p>
                </div>
              </div>
            </>
          ) : (
            <img src="\img\Path 847.png" alt="search" className="nav-search" />
          )}
        </div>
      </div>
      <div className="nav-register">
        <div className="nav-p">
          <p>Registracija</p>
        </div>
      </div>
    </div>
  );
};
