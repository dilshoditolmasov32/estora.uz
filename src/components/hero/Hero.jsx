import heroImg from "../../assets/images/houses.svg";
import Filter from "../filter/Filter";
import "./Hero.css";

const Hero = () => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-content">
        <div className="container">
        <div className="hero-title">
          <h1>KOMFORT VA ISHONCHLILIKNI BIRLASHTIRGAN MAKON.</h1>
          <p>
            Estora orqali ko'chmas mulk bilan bog'liq barcha ehtiyojlaringizni
            zamonaviy va ishonchli tarzda hal qilasiz. Bu yerda uy va biznes
            imkoniyatlari nafaqat mahalliy, balki xalqaro miqyosda ham sizga
            ochiq.
          </p>
        </div>
        <ul className="list-group">
          <li>
            <a href="/ijara">Ijara </a>
          </li>
          <li>
            <a href="/sales">Sotuv </a>
          </li>
          <li>
            <a href="/room">Xonadosh </a>
          </li>
          <li>
            <a href="/special">Special </a>
          </li>
        </ul>

         <Filter/>
      </div>
      </div>
      {/* <div className="hero-section-news">
        <div className="container">
          <div className="marquee-wrapper">
            <p>Estora yangi imkoniyatlar taqdim etmoqda!</p>
            <p>Yangi turar-joy loyihalari ishga tushirildi. </p>
            <p>Xalqaro hamkorlik kengaymoqda</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;