import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import "./Filter.css";
import { FormLabel } from "@mui/joy";
import filterIcon from "../../assets/images/filterIcon.svg";
import searchIcon from "../../assets/images/search.svg";
const Filter = () => {
   const options = [
    {
      id: 1,
      option: "Value 1",
      value: "val1",
    },
    {
      id: 2,
      option: "Value 2",
      value: "val2",
    },
    {
      id: 3,
      option: "Value 3",
      value: "val3",
    },
  ];
  return (
    <>
      <ul className="filter-component">
        <li>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "100%",
              letterSpacing: "-1.1%",
              color: "#9A9B9F",
              marginBottom: "5px",
              marginLeft: "10px",
            }}
          >
            Mulk turi
          </FormLabel>
          <Select
            placeholder="Tanlang"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 130,
              background: "none",
              border: "none",
              borderColor: "none",
              boxShadow: "none",
              color: "black",
              fontSize: "20px",
              "&:hover": {
                background: "none",
              },
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                color: " #DEAD38",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            {options?.map((element) => (
              <Option key={element.id} value={`${element.value}`}>
                {element.option}
              </Option>
            ))}
          </Select>
        </li>
        <li>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "100%",
              letterSpacing: "-1.1%",
              color: "#9A9B9F",
              marginBottom: "5px",
              marginLeft: "10px",
            }}
          >
            Viloyat
          </FormLabel>
          <Select
            placeholder="Tanlang"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 130,
              background: "none",
              border: "none",
              borderColor: "none",
              boxShadow: "none",
              color: "black",
              fontSize: "20px",
              "&:hover": {
                background: "none",
              },
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                color: " #DEAD38",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            {options?.map((element) => (
              <Option key={element.id} value={`${element.value}`}>
                {element.option}
              </Option>
            ))}
          </Select>
        </li>
        <li>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "100%",
              letterSpacing: "-1.1%",
              color: "#9A9B9F",
              marginBottom: "5px",
              marginLeft: "10px",
            }}
          >
            Tuman
          </FormLabel>
          <Select
            placeholder="Tanlang"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 130,
              background: "none",
              border: "none",
              borderColor: "none",
              boxShadow: "none",
              color: "black",
              fontSize: "20px",
              "&:hover": {
                background: "none",
              },
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                color: " #DEAD38",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            {options?.map((element) => (
              <Option key={element.id} value={`${element.value}`}>
                {element.option}
              </Option>
            ))}
          </Select>
        </li>
        <li>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "100%",
              letterSpacing: "-1.1%",
              color: "#9A9B9F",
              marginBottom: "5px",
              marginLeft: "10px",
            }}
          >
            Ijara muddati
          </FormLabel>
          <Select
            placeholder="Tanlang"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 130,
              background: "none",
              border: "none",
              borderColor: "none",
              boxShadow: "none",
              color: "black",
              fontSize: "20px",
              "&:hover": {
                background: "none",
              },
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                color: " #DEAD38",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            {options?.map((element) => (
              <Option key={element.id} value={`${element.value}`}>
                {element.option}
              </Option>
            ))}
          </Select>
        </li>
        <li>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "100%",
              letterSpacing: "-1.1%",
              color: "#9A9B9F",
              marginBottom: "5px",
              marginLeft: "10px",
            }}
          >
            Ijara muddati
          </FormLabel>
          <Select
            placeholder="Tanlang"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: {
                xs:"100%",
                
              },
              background: "none",
              border: "none",
              borderColor: "none",
              boxShadow: "none",
              color: "black",
              fontSize: "20px",
              "&:hover": {
                background: "none",
              },
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                color: " #DEAD38",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            {options?.map((element) => (
              <Option key={element.id} value={`${element.value}`}>
                {element.option}
              </Option>
            ))}
          </Select>
        </li>
        <li>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "100%",
              letterSpacing: "-1.1%",
              color: "#9A9B9F",
              marginBottom: "5px",
              marginLeft: "10px",
            }}
          >
            Vositachilik haqqi
          </FormLabel>
          <Select
            placeholder="Tanlang"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 130,
              background: "none",
              border: "none",
              borderColor: "none",
              boxShadow: "none",
              color: "black",
              fontSize: "20px",
              "&:hover": {
                background: "none",
              },
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                color: " #DEAD38",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            {options?.map((element) => (
              <Option key={element.id} value={`${element.value}`}>
                {element.option}
              </Option>
            ))}
          </Select>
        </li>
        <li>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "100%",
              letterSpacing: "-1.1%",
              color: "#9A9B9F",
              marginBottom: "5px",
              marginLeft: "10px",
            }}
          >
            So’ngi e’lonlar
          </FormLabel>
          <Select
            placeholder="Tanlang"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 130,
              background: "none",
              border: "none",
              borderColor: "none",
              boxShadow: "none",
              color: "black",
              fontSize: "20px",
              "&:hover": {
                background: "none",
              },
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                color: " #DEAD38",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            {options?.map((element) => (
              <Option key={element.id} value={`${element.value}`}>
                {element.option}
              </Option>
            ))}
          </Select>
        </li>
      </ul>

      <div className="search-component">
        <div>
          <button>
            <img src={filterIcon} alt="filter icon" id="filterIcon" />
          </button>
          <button className="allFilter-btn">Barcha Filtrlar</button>
        </div>
        <div>
          <button id="id-search-btn">
            <span>ID</span>
            orqali qidirish
          </button>
          <button className="searchShow-btn">
            <img 
            src={searchIcon} alt="search icon" 
            id="searchIcon"
            />
            E’lonlarni ko’rish
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
