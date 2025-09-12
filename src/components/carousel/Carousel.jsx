import React, { useState } from "react";
import "./Carousel.css";
import home from "../../assets/images/house.svg";
import raketa from "../../assets/images/raketa.svg";
import fingers from "../../assets/images/shartnoma.svg";
import railway from "../../assets/images/railway.svg";
import ruler from "../../assets/images/ruler.svg";
import pencil from "../../assets/images/pencil.svg";
import homeIcon from "../../assets/images/homeIcon.svg";
import room from "../../assets/images/room.svg";

const data = [
  {
    id: 1122,
    price: "50.000 y.e",
    label: "Kvartira Sotiladi",
    location: "Qibray tumani, Limonaria village turar-joy majmuasi",
    etaj: "5/7 etaj",
    xona: "2 xona",
    maydon: "45m²",
    metro: "Oybek Metro",
    tamir: "Yevro ta’mir",
    tag: "TOP",
    img: "/img/kv1.jpg",
    taklif: "Yaxshi Taklif",
    taklifBg: "#FFEB3D",
  },
  {
    id: 2233,
    price: "45.000 y.e",
    label: "Kvartira Sotiladi",
    location: "Qibray tumani, Limonaria village turar-joy majmuasi",
    etaj: "5/7 etaj",
    xona: "2 xona",
    maydon: "45m²",
    metro: "Oybek Metro",
    tamir: "Yevro ta’mir",
    tag: "TOP",
    img: "/img/kv2.jpg",
    taklif: "Zudlik bilan ",
    taklifBg: "#FF2E17",
  },
  {
    id: 3344,
    price: "30.000 y.e",
    label: "Kvartira Sotiladi",
    location: "Qibray tumani, Limonaria village turar-joy majmuasi",
    etaj: "5/7 etaj",
    xona: "2 xona",
    maydon: "45m²",
    metro: "Oybek Metro",
    tamir: "Yevro ta’mir",
    tag: "TOP",
    img: "/img/kv3.jpg",
    taklif: " Super Narx",
    taklifBg: "#00AB4F",
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className="carousel">
      <button className="arrow left" onClick={prevSlide}>
        &lt;
      </button>

      <div className="carousel-cards">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-card ${
              index === current ? "active" : "hidden"
            }`}
          >
            <div className="tag">
              <img src={raketa} alt="raketa icon" />
              {item.tag}
            </div>
            <img src={home} alt={item.label} />
            <div className="info">
              <span
                className="taklif"
                style={{ backgroundColor: `${item.taklifBg}` }}
              >
                {item.taklif}
              </span>
              <div className="price-data">
                <h3 className="price">{item.price}</h3>
                <div className="shartnoma-block">
                  <img src={fingers} alt="fingers icon" />
                  <span>Kelishiladi</span>
                </div>

                <h6 className="user-id">ID: {item.id}</h6>
              </div>
              <h4 id="carousel-card-label">{item.label}</h4>
              <p className="location-text">{item.location}</p>
              <div className="details">
                <span>
                  <img src={homeIcon} alt="home icon" />
                  {item.etaj}
                </span>
                <span>
                  <img src={room} alt="room icon" />
                  {item.xona}
                </span>
                <span>
                  <img src={ruler} alt="ruler icon" />
                  {item.maydon}
                </span>
              </div>
              <div className="extra">
                <span>
                  <img src={pencil} alt="pencil icon" />
                  {item.tamir}
                </span>
                <span>
                  <img src={railway} alt="railway icon" />
                  {item.metro}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
}
