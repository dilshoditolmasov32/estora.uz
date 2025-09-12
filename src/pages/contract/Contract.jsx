import "./Contract.css";
import contractImg from "../../assets/images/conractPage.svg";
const Contract = () => {
  return (
    <div className="contract-page">
      <div className="container">
        <div className="conract-section">
          <img src={contractImg} alt="contract image" className="image" />
          <div className="shartnoma-list">
            <h2>Shartnoma bilan tanishing</h2>
            <p>
              Hamkorlik shartlari va huquqiy asoslarni diqqat bilan ko‘rib
              chiqing.
            </p>
            <p>Asosiy ma’lumotlar Shartnoma tafsilotlari Veriﬁkatsiya</p>
            <h2>KO‘CHMAS MULK OLDI-SOTDI BO‘YICHA VOSITACHILIK SHARTNOMASI</h2>
            <p>
              (Tijorat vositachilik xizmatlari bo‘yicha ommaviy oferta
              shartnomasi)
            </p>

            <ul>
              <li>
                1. TOMONLAR 1.1. Bir tomondan, “ESTORA REAL ESTATE AGENCY” MChJ,
                keyingi o‘rinlarda “Agentlik” deb yuritiladi. 1.2. Ikkinchi
                tomondan, pasport/ro‘yxatga olish guvohnomasi/korxona davlat
                ro‘yxatidan o‘tganligi to‘g‘risidagi hujjat asosida ish
                yurituvchi Mijoz (O‘zbekiston fuqarosi, yuridik shaxs yoki chet
                el fuqarosi), keyingi o‘rinlarda “Mijoz” deb yuritiladi. 1.3.
                Tomonlar birgalikda “Tomonlar” deb ataladi. Ushbu shartnoma
                Agentlik va Mijoz o‘rtasidagi barcha huquq va majburiyatlarni,
                shuningdek, nizolarni hal qilish tartibini, javobgarlikni va
                onlayn tarzda xizmat ko‘rsatish shartlarini belgilaydi. Huquqiy
                asos: O‘zbekiston Respublikasi Konstitutsiyasi (modda 53, 54),
                Fuqarolik kodeksi (FK 8, 327, 354, 364, 370, 409, 991
                moddalari), “Iste’molchilar huquqlarini himoya qilish
                to‘g‘risida”gi Qonun, “Tijorat siri to‘g‘risida”gi Qonun,
                elektron hujjatlar va EDS to‘g‘risidagi qonunlar.
              </li>
              <li>
                2. SHARTNOMA PREDMETI 2.1. Agentlik Mijoz topshirig‘iga binoan
                quyidagi xizmatlarni ko‘rsatadi: Ko‘chmas mulk obyektlarini
                izlash, tanlash va baholash; Huquqiy tekshiruv (due diligence),
                jumladan, kadastr, mulk huquqlari va cheklovlarni aniqlash;
                Oldi-sotdi yoki ijara shartnomasi loyihasini tayyorlash;
                Muzokaralar olib borish va bitim shartlarini muvoﬁqlashtirish;
                Notarial tasdiqlash va davlat ro‘yxatidan o‘tkazish jarayonida
                hamroh bo‘lish; Zaruratga ko‘ra bank, baholash, sug‘urta, texnik
                ko‘rik va boshqa integratsiya xizmatlarini taqdim etish; Onlayn
                platforma orqali barcha hujjatlarni EDS bilan rasmiylashtirish.
                2.2. Mijoz ushbu shartnoma doirasida ko‘rsatilgan xizmatlar
                uchun Agentlikka haq to‘lash majburiyatini oladi. Huquqiy asos:
                FK 327, 354, 370 moddalari; “Rieltorlik faoliyati to‘g‘risida”gi
                Qonun; EDS va elektron hujjatlar to‘g‘risidagi qonunlar.
              </li>

              <span>
                “Keyingisi” tugmani bosish orqali siz shartnomani to‘liq o‘qib
                chiqqaningizni tasdiqlaysiz. Bu harakat shartnomani keyingi
                bosqichga o‘tkazish uchun rozilik sifatida qabul qilinadi.
                Hujjat hali to‘liq kuchga kirgani hisoblanmaydi.
              </span>

              <div className="contract-btns">
                <button className="prev-btn">Orqaga</button>
                <button className="next-btn">Keyingisi</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
