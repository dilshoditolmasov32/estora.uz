import React, { useState } from "react";
import "./IDForm.css";
import Select, { selectClasses } from "@mui/joy/Select";

import {
  FormControl,
  Option,
  Radio,
  RadioGroup,
  Sheet,
  Typography,
} from "@mui/joy";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const IDForm = () => {
  const [selected, setSelected] = useState("SO’M");
  return (
    <form className="IDForm-wrapper">
      <div className="IDForm-card">
        <h3 className="IDForm-title">
          Shaxs yoki yuridik shaxs identifikatsiyasi
        </h3>

        <div className="IDForm-grid">
          <input type="text" placeholder="Ism*" />
          <input type="text" placeholder="Familiya*" />
          <input type="text" placeholder="Otasining ismi" />
          <input type="text" placeholder="Seriya*" />
          <input type="text" placeholder="Pasport raqami*" />
          <input type="text" placeholder="STIR (yuridik shaxs uchun)" />
        </div>

        <div className="id-upload">
          <button className="upload-btn">Shaxsingizni tasdiqlang</button>
        </div>

        <h3 className="IDForm-title">Ko'chmas mulk ma'lumotlari</h3>
        <div className="IDForm-grid">
          <input type="text" placeholder="Telefon raqami*" />
          <input type="email" placeholder="Elektron manzil" />

          <Select
            placeholder="Tanlang.."
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 250,
              borderRadius: "20px",
              borderColor: "#BB8C33",
              boxShadow: "none",
              "&:hover": {
                background: "none",
              },
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            <Option value="dog">Dog</Option>
            <Option value="cat">Cat</Option>
            <Option value="fish">Fish</Option>
            <Option value="bird">Bird</Option>
          </Select>
          <Select
            placeholder="Tanlang.."
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 250,
              borderRadius: "20px",
              borderColor: "#BB8C33",
              boxShadow: "none",
              "&:hover": {
                background: "none",
              },
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            <Option value="dog">Dog</Option>
            <Option value="cat">Cat</Option>
            <Option value="fish">Fish</Option>
            <Option value="bird">Bird</Option>
          </Select>
        </div>

        <h3 className="IDForm-title">Xizmat hajmi va to'lov tartibi</h3>
        <div className="IDForm-grid">
          <input type="text" placeholder="To'lov tartibi avans" />
          <Select
            placeholder="Tanlang.."
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 250,
              borderRadius: "20px",
              borderColor: "#BB8C33",
              boxShadow: "none",
              "&:hover": {
                background: "none",
              },
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            <Option value="dog">Dog</Option>
            <Option value="cat">Cat</Option>
            <Option value="fish">Fish</Option>
            <Option value="bird">Bird</Option>
          </Select>
          <FormControl>
            {/* <FormLabel>Valyuta</FormLabel> */}
            <RadioGroup
              overlay
              name="valyuta"
              defaultValue="SO’M"
              orientation="horizontal"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              sx={{ gap: 2 }}
            >
              {["SO’M", "USD"].map((num, i) => {
                const isChecked = selected === num;
                return (
                  <Sheet
                    component="label"
                    key={i}
                    variant="outlined"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      background: "none",
                      gap: "5px",
                      boxShadow: "none",
                      borderRadius: "20px",
                      border: "1px solid #BB8C33",
                      cursor: "pointer",
                      paddingY: "10px",
                      paddingX: "14px",
                      transition: "background-color 0.4s ease, color 0.4s ease",
                      fontFamily: "Inter",
                      lineHeight: "120%",
                      fontWeight: "500",
                      backgroundColor: isChecked ? "#BB8C33" : "transparent",
                      color: isChecked ? "#fff" : "#2C2E35",
                      "&:hover": {
                        backgroundColor: "#BB8C33",
                        color: "#fff",
                      },

                      [`& .Mui-checked`]: {
                        background: "#BB8C33",
                        color: "#fff",
                      },
                      [`& .Mui-checked + .MuiTypography-root`]: {
                        color: "#fff",
                      },
                      [`& .Mui-checked ~ *`]: {
                        backgroundColor: "#BB8C33",
                        color: "#fff",
                      },
                    }}
                  >
                    <Radio
                      value={num}
                      variant="soft"
                      sx={{
                        color: "#BB8C33",
                        "&.Mui-checked": {
                          color: "#fff",
                        },
                      }}
                    />

                    <Typography  sx={{ color: isChecked ? "#fff" : "#2C2E35" }}  level="body-sm">
                      {num}
                    </Typography>
                  </Sheet>
                );
              })}
            </RadioGroup>
          </FormControl>
        </div>

        <textarea placeholder="Qo'shimcha ma'lumot"></textarea>

        <div className="IDForm-actions">
          <button className="btn back">Orqaga</button>
          <button className="btn submit">Tasdiqlayman</button>
        </div>
      </div>

      {/* Footer text */}
      <p className="IDForm-footer">
        “Tasdiqlash” tugmasini bosish orqali siz shartnoma shartlarini o‘qib
        chiqqanligingizni, ularni tushunganingizni hamda rozilik
        bildirganingizni tasdiqlaysiz. Shuningdek, kiritilgan ma’lumotlar
        asosida shartnomaning qonuniy kuchga kirishiga rozilik bergan bo‘lasiz.
      </p>
    </form>
  );
};

export default IDForm;
