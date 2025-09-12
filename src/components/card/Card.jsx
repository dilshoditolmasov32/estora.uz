import React from "react";
import "./Card.css";

const cards = [
  { title: "Sotuvdagi Uylar", count: 750 },
  { title: "Arenda Uylar", count: 750 },
  { title: "Xonadosh", count: 750 },
  { title: "Business Space", count: 750 },
];

const Cards = () => {
  return (
    <div className="container">
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <div className="card-count-data">

            <p>
              Barcha <br /> e’lonlar 
            </p>
                <div className="top__small-line"></div>
              <span className="count">{card.count}</span>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
