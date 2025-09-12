import "./Agreement.css";
import contractImg from "../../assets/images/contract.svg"
import pen from "../../assets/images/pen.svg"
const Agreement = () => {
  return (
    <section className="contract-section">
      <div className="container">
        <div className="agreement">
          <div>
            <img src={contractImg} alt="shartnoma rasmi" id="contractImg" />
          </div>
          <div >
            <h2 className="contract-title">HUQUQIY SHARTNOMA ASOSIDA HAMKORLIKNI BOSHLANG</h2>
            <p className="contract-text">
              Bizning barcha xizmatlarimiz faqat rasmiy huquqiy shartnoma
              asosida taqdim etiladi. Shartnomani onlayn tarzda
              imzolaganingizdan so‘ng, siz bilan hamkorlik jarayoni to‘liq
              qonuniy kafolat ostida boshlanadi. Bu yondashuv mijozlarimiz
              manfaatlarini himoya qilish, shaffoﬂik va ishonchni ta’minlash
              uchun joriy etilgan.
            </p>

            <button className="contract-btn">
              <p>Rasmiy shartnoma asosida davom etish</p>
              <img src={pen} alt="ruchka icon" />
            </button>
          </div>
        <div  className="contract-bottom__line"></div>
        </div>
      </div>
    </section>
  );
};

export default Agreement;
