import { TextField } from "@mui/material";
import { ButtonUnstyled, buttonUnstyledClasses } from "@mui/base";
import { styled } from "@mui/system";

const CustomButton = styled(ButtonUnstyled)({
  backgroundColor: "#ecf1fb",
  padding: "12px 24px",
  borderRadius: "4px",
  color: "#33475b",
  transition: "all 150ms ease",
  cursor: "pointer",
  height: "40px",
  display: "flex",
  borderRight: "1px solid #cecece",
  justifyContent: "center",
  alignItems: "center",
});

const SearchFiled = function () {
  return (
    <TextField
      type="text"
      placeholder=" جستجو کنید"
      sx={{
        position: "relative",
        width: "287px",
        mt:"15px",
        "& .MuiInputBase-root": {
          height: "40px",
        },
      }}
      InputProps={{
        endAdornment: (
          <CustomButton
            component="span"
            color="secondary"
            variant="button"
            sx={{
              position: "absolute",
              left: 0,
              width: "100px",
              padding: "16px 0",
              borderRadius: "5px 0 0 5px",
            }}
          >
            جستجو
          </CustomButton>
        ),
      }}
    />
  );
};
export default SearchFiled;
