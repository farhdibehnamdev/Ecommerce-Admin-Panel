import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";

const AddButton = function () {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#ECF1FB",
        color: "#33475B",
        boxShadow: "none",
        mt:"15px",
        border: "1px solid #cecece",
      }}
    >
      افزودن محصول جدید
    </Button>
  );
};
export default AddButton;
