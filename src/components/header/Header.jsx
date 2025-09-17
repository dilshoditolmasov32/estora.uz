import { useEffect, useState } from "react";
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
import email from "../../assets/images/mail.svg";
// import {ReactComponent as Icon } from "../../assets/images/mail.svg";
import call from "../../assets/images/call.svg";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { FiYoutube } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showTitle, setShowTitle] = useState(false);


  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const target = event.target;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-menu')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
 const handleClick = () => {
    if (window.innerWidth <= 750) {
      setShowTitle(!showTitle);
    }
  };


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

  const navigationItems = [
    { id: 1, title: "Ijara", href: "/ijara" },
    { id: 2, title: "Sotib olish", href: "/sotib-olish" },
    { id: 3, title: "NoBroker", href: "/nobroker" },
    { id: 4, title: "Expats", href: "/expats" },
    { id: 5, title: "Business Space", href: "/business-space" },
  ];

  return (
    <>
      <header className="header-section">
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

               <div className="test-mode">
                <img src={warning} alt="warning icon" />
                <span> The site works in the test mode</span>
              </div>

              <div className="header-options">
                <a href="/message" className="phoneMessage-link">
                  <img src={phoneMessage} alt="phone icon" />
                </a>
                <div className="option-box">
                  <img src={languageIcon} alt="language icon" id="language-icon" />
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
            </div>
            
            <div className="header-navigation">
              <div className="hamburger-logo__block">
                <a href="/" className="header-logo">
                  <img src={logo} alt="header logo icon" id="header-logo" />
                </a>
                
                <div className="test-mode-mobile"
                      onClick={handleClick}

                >
                  <img src={warning} alt="warning icon" />
                  <span>The site works in the test mode</span>
                </div>
                
                <button 
                  className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                >
                  <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                  </div>
                </button>
              </div>
              
              <div className="reklama-login__block">
                <a href="#reklaman" className="advert-btn">
                  <img src={plus} alt="plus icon" id="plus-icon" />
                  <span>E'lon joylashtirish</span>
                </a>
                <a href="#login" className="login-link">
                  <img src={user} alt="user icon" />
                  <span>Login</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <div className="mobile-menu-header">
              <div className="mobile-logo">
                <img src={logo} alt="logo" />
              </div>
              {/* <button 
                className="close-menu-btn"
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
              >
                <CgClose size={24} />
              </button> */}
            </div>

            <div className="mobile-menu-content">
              {/* Mobile Navigation Links */}
              <nav className="mobile-navigation">
                <h3>Navigatsiya</h3>
                <ul>
                  {navigationItems.map((item, index) => (
                    <li key={item.id} style={{ animationDelay: `${index * 0.1}s` }}>
                      <a 
                        href={item.href} 
                        onClick={toggleMobileMenu}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Actions */}
              <div className="mobile-actions">
                <a href="#reklaman" className="mobile-advert-btn" onClick={toggleMobileMenu}>
                  <img src={plus} alt="plus icon" />
                  <span>E'lon joylashtirish</span>
                </a>
                <a href="#login" className="mobile-login-btn" onClick={toggleMobileMenu}>
                  <img src={user} alt="user icon" />
                  <span>Login</span>
                </a>
              </div>

              {/* Mobile Options */}
              <div className="mobile-options">
                <div className="mobile-option-item">
                  <img src={languageIcon} alt="language icon" />
                  <SelectComponent options={options} />
                </div>
                <div className="mobile-option-item">
                  <img src={doiraIcon} alt="currency icon" />
                  <SelectComponent options={moneysValue} />
                </div>
              </div>

              {/* Mobile Contact */}
              <div className="mobile-contact">
                <h3>Contact</h3>
                <a href="mailto:info@estora.uz" className="mobile-contact-item">
                  <img src={email} alt="email icon" />
                  <span>info@estora.uz</span>
                </a>
                <a href="tel:+998951606446" className="mobile-contact-item">
                  {/* <img src={call} alt="phone icon"  /> */}
                  {/* <Icon className="icon" /> */}
                  <span>+998 (95) 160 64 46</span>
                </a>
              </div>

              {/* Mobile Social Media */}
              <div className="mobile-social">
                <h3>Follow Us</h3>
                <div className="mobile-social-links">
                  <a href="https://www.instagram.com/dilshodbek_zafarivich/" target="_blank">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100092204617747" target="_blank">
                    <SlSocialFacebook />
                  </a>
                  <a href="https://www.youtube.com/" target="_blank">
                    <FiYoutube />
                  </a>
                  <a href="https://t.me/@fromMrX" target="_blank">
                    <TbBrandTelegram />
                  </a>
                  <a href="https://x.com/" target="_blank">
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;