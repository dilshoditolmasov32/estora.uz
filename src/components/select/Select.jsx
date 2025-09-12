import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

export default function SelectIndicator({ options }) {
  const placeValue=options[0].option
  
  return (

    <Select
      placeholder={placeValue}
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 120,
        background: "none",
        border: "none",
        borderColor: "none",
        boxShadow:"none",
        "&:hover":{
          background:"none"
        }
,
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
    {
      options?.map(element=>(
        
     <Option
     key={element.id}
     value={`${element.value}`}
     >
      {element.option}
     </Option>
      ))
    }
    </Select>
  );
}
