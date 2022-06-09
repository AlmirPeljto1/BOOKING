import "./SmallNav.css";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AddLocationOutlinedIcon from "@mui/icons-material/AddLocationOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useState } from "react";
export const SmallNav = () => {
  const [menu, setMenu] = useState(false);
  const [menuS, setMenuS] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
    setMenuS(!menuS);
  };
  return (
    <div className="smallN-container">
      <div className="smallN-wrapper">
        <img src="\img\Booking logo.png" alt="logo" className="smallN-img" />
        <div className="krugWrapp">
          <div className="krug1" onClick={handleClick}>
            <img src="\img\Path 847.png" alt="menu1" className="krugImg1" />
          </div>
          <div className="krug2" onClick={handleClick}>
            <MenuIcon className="krugImg2" />
            {menu ? (
              <div className="menu-exp1">
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
            ) : (
              ""
            )}
          </div>
          {menuS ? (
            <div className="minidrop">
              <p className="pretty">Prijava</p>
              <p>Naslovna</p>
              <p>O nama</p>
              <p>Kontakt</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
