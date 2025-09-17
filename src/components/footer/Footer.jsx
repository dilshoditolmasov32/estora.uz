import { FiYoutube } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/images/footerlogoIcon.svg";
import phoneNumber from "../../assets/images/operatorCall.svg";
import message from "../../assets/images/message.svg";

import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer-section">
      <ul className="footer-link">
        <li>Biz haqimizda</li>
        <li> Xizmatlarimiz</li>
        <li>Yangiliklar</li>
        <li>Reklama</li>
        <li>Ommaviy oferta</li>
        <li>FAQ</li>
      </ul>
      <div className="container">
        <div className="footer-data">
          <div>
            <a href="/">
              <img src={logo} alt="logo icon" id="footer-logo" />
            </a>
            <p>YTT “Estora”, 2025 yy. Barcha huquqlar himoyalangan</p>
            <p id="webcite-text">
              Saytdan foydalanish orqali Foydalanuvchi shartnomasi va Shaxsiy
              ma’lumotlarni qayta ishlash siyosati bilan rozilik
              bildirganingizni angalatadi.
            </p>
          </div>
          <div className="footer-media">
            <p>O’zbekiston bo’ylab barcha qo’ng’iroqlar bepul</p>
            <div className="call-number">
              <img src={phoneNumber} alt="call icon" id="call-icon" />
              <a href="tel:+998951606446" id="phone-number">
                +998 (95) 160 64-46
              </a>
            </div>
            <ul className="social-media">
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
          </div>
        </div>
        <p className="footer-bottom-text">
          © 2025 Estora – Barcha huquqlar himoyalangan. estora.uz saytida
          joylashtirilgan ma’lumotlardan foydalanish — jumladan, ularni namoyish
          etish, nusxa ko‘chirish, ko‘paytirish yoki tarqatish — faqatgina
          manbaga faol havola ko‘rsatilgan taqdirda ruxsat etiladi.
        </p>
      </div>

     <div className="container">
       <button className="message-btn">
        <img src={message} alt="message icon" />
        <span> Savollaringiz bormi? Biz aloqadamiz.</span>
      </button>
     </div>
    </section>
  );
};

export default Footer;
