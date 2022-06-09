import { End } from "../../COMPONENTS/End/End";
import { Footer } from "../../COMPONENTS/Footer/Footer";
import { Image } from "../../COMPONENTS/Image/Image";
import { Line } from "../../COMPONENTS/Line/Line";
import { Main } from "../../COMPONENTS/Main/Main";
import { Navbar } from "../../COMPONENTS/Navbar/Navbar";
import { PopAtrakcije } from "../../COMPONENTS/PopularneAtrakcije/PopAtrakcije";
import { Prijedlog } from "../../COMPONENTS/Prijedlog/Prijedlog";
import { SmallNav } from "../../COMPONENTS/SmallNav/SmallNav";
import { Smjestaji } from "../../COMPONENTS/Smjestaji/Smjestaji";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <SmallNav />
      <Main />
      <Smjestaji />
      <PopAtrakcije />
      <Image />
      <Prijedlog />
      <Line />
      <Footer />
      <End />
    </div>
  );
};
