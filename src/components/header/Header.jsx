import "./Header.css";
import SelectComponent from "../select/Select";
import user from "../../assets/images/user.svg";
import logo from "../../assets/images/logo.svg";
import plus from "../../assets/images/plus.svg";
import hamburgerMenu from "../../assets/images/hamburger.svg";
import warning from "../../assets/images/error.svg";
import phoneMessage from "../../assets/images/phone-message.svg";
import languageIcon from "../../assets/images/languageIcon.svg";
import likeIcon from "../../assets/images/heart.svg";
import doiraIcon from "../../assets/images/doira.svg";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";

const Header = () => {
  const options = [
    {
      id: 1,
      option: "English",
      value: "eng",
    },
    {
      id: 2,
      option: "Uzbek",
      value: "uzb",
    },
    {
      id: 3,
      option: "Russian",
      value: "rus",
    },
  ];

  const moneysValue = [
    {
      id: 1,
      option: "USD",
      value: "usd",
    },
    {
      id: 2,
      option: "UZB",
      value: "uzb",
    },
    {
      id: 3,
      option: "RUBL",
      value: "rubl",
    },
    {
      id: 4,
      option: "EUR",
      value: "eur",
    },
  ];
  return (
    <>
      <header>
        <section className="top-header">
          <div className="container">
            <div className="topBar-section">
              <ul className="topbar-media">
                <li>
                  <a
                    href="https://www.instagram.com/dilshodbek_zafarivich/"
                    target="_blank"
                  >
                    <FaInstagram className="instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100092204617747"
                    target="_blank"
                  >
                    <SlSocialFacebook className="facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                    <FiYoutube className="youtube" />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/@fromMrX" target="_blank">
                    <TbBrandTelegram className="telegram" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/" target="_blank">
                    <FaXTwitter className="twitter" />
                  </a>
                </li>
              </ul>

              <div className="header-options">
                <a href="/message">
                  <img src={phoneMessage} alt="phone icon" />
                </a>
                <div className="option-box">
                  <img src={languageIcon} alt="language icon" />

                  <SelectComponent options={options} />
                </div>

                <a href="//like" className="like-box">
                  <img src={likeIcon} alt="like icon" />
                </a>

                <div className="option-box">
                  <img src={doiraIcon} alt="doira icon" />
                  <SelectComponent options={moneysValue} />
                </div>
              </div>

              <div className="test-mode">
                <img src={warning} alt="warning icon" />
                <span> The site works in the test mode</span>
              </div>
            </div>
            <div className="header-navigation">
              <div className="hamburger-logo__block">
                <button className="hamburger-menu">
                  <img src={hamburgerMenu} alt="hamburger-icon" />
                </button>
                <a href="#" className="header-logo">
                  <img src={logo} alt="header logo icon" id="header-logo" />
                </a>
              </div>
              <div className="reklama-login__block">
                <a href="#reklaman" className="advert-btn">
                  <img src={plus} alt="plus icon" id="plus-icon" />
                  <span>E’lon joylashtirish</span>
                </a>
                <a href="#login" className="login-link">
                  <img src={user} alt="user icon" />
                  <span>Login</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
