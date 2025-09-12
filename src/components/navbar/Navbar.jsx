import email from "../../assets/images/mail.svg";
import call from "../../assets/images/call.svg";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-section">
      <div className="container">
        <div className="navbar-links">


      <ul>
        <li>Ijara</li>
        <li>Sotib olish</li>
        <li>NoBroker</li>
        <li>Expats</li>
        <li>Business Space</li>
      </ul>
      <div className="navbar-media">

      <div className="small-line"></div>
      <a href="mailto:info@estora.uz" className="email-link">
        <img src={email} alt="email icon" id="email-icon"/>
        info@estora.uz
      </a>
      <a href="tel:+998951606446" className="phone-link">
        <img src={call} alt="call icon" id="phone-icon" />
        +998 (95) 160 64 46
      </a>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
