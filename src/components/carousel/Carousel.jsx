import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
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
    tamir: "Yevro ta'mir",
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
    tamir: "Yevro ta'mir",
    tag: "TOP",
    img: "/img/kv2.jpg",
    taklif: "Zudlik bilan",
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
    tamir: "Yevro ta'mir",
    tag: "TOP",
    img: "/img/kv3.jpg",
    taklif: "Super Narx",
    taklifBg: "#00AB4F",
  },
  {
    id: 4435,
    price: "40.000 y.e",
    label: "Kvartira Sotiladi",
    location: "Qibray tumani, Limonaria village turar-joy majmuasi",
    etaj: "5/7 etaj",
    xona: "2 xona",
    maydon: "45m²",
    metro: "Oybek Metro",
    tamir: "Yevro ta'mir",
    tag: "TOP",
    img: "/img/kv3.jpg",
    taklif: "Super Narx",
    taklifBg: "#00AB4F",
  },
  {
    id: 5454,
    price: "300.000 y.e",
    label: "Kvartira Sotiladi",
    location: "Qibray tumani, Limonaria village turar-joy majmuasi",
    etaj: "5/7 etaj",
    xona: "2 xona",
    maydon: "45m²",
    metro: "Oybek Metro",
    tamir: "Yevro ta'mir",
    tag: "TOP",
    img: "/img/kv3.jpg",
    taklif: "Super Narx",
    taklifBg: "#00AB4F",
  },
  {
    id: 2222,
    price: "30.000 y.e",
    label: "Kvartira Sotiladi",
    location: "Qibray tumani, Limonaria village turar-joy majmuasi",
    etaj: "5/7 etaj",
    xona: "2 xona",
    maydon: "45m²",
    metro: "Oybek Metro",
    tamir: "Yevro ta'mir",
    tag: "TOP",
    img: "/img/kv3.jpg",
    taklif: "Super Narx",
    taklifBg: "#00AB4F",
  },
  {
    id: 3333,
    price: "45.000 y.e",
    label: "Kvartira Sotiladi",
    location: "Qibray tumani, Limonaria village turar-joy majmuasi",
    etaj: "5/7 etaj",
    xona: "2 xona",
    maydon: "45m²",
    metro: "Oybek Metro",
    tamir: "Yevro ta'mir",
    tag: "TOP",
    img: "/img/kv3.jpg",
    taklif: "Super Narx",
    taklifBg: "#00AB4F",
  },
  {
    id: 2211,
    price: "30.000 y.e",
    label: "Kvartira Sotiladi",
    location: "Qibray tumani, Limonaria village turar-joy majmuasi",
    etaj: "5/7 etaj",
    xona: "2 xona",
    maydon: "45m²",
    metro: "Oybek Metro",
    tamir: "Yevro ta'mir",
    tag: "TOP",
    img: "/img/kv3.jpg",
    taklif: "Super Narx",
    taklifBg: "#00AB4F",
  },
  {
    id: 4433,
    price: "30.000 y.e",
    label: "Kvartira Sotiladi",
    location: "Qibray tumani, Limonaria village turar-joy majmuasi",
    etaj: "5/7 etaj",
    xona: "2 xona",
    maydon: "45m²",
    metro: "Oybek Metro",
    tamir: "Yevro ta'mir",
    tag: "TOP",
    img: "/img/kv3.jpg",
    taklif: "Super Narx",
    taklifBg: "#00AB4F",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <div className="carousel-component">
      <div className="container">
        <h2 className="carousel-title">Eng yaxshi takliﬂar</h2>
        <p className="carousel-text">Siz uchun eng maqbul va samarali yechimlarni topishda ishonchli hamkoringiz bo‘lamiz.</p>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="carousel-cards"
        >
          {data.map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`} className="carousel-card">
              <div className="product-img">
                <img src={home} alt={item.label} />
              </div>
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
                <h4 className="carousel-card-label">{item.label}</h4>
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
              <div className="tag">
                <img src={raketa} alt="raketa icon" />
                {item.tag}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
