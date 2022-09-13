import { Menu } from "@mui/icons-material";
import { AppBar, IconButton } from "@mui/material";

const MainAppBar = function ({ setIsShow, isShow }) {
  const toggleDrawerOpen = () => {
    setIsShow(!isShow);
  };

  return (
    <AppBar position="fixed" sx={{ width: "100%", height: "50px" }}>
      <IconButton
        color="inherit"
        onClick={toggleDrawerOpen}
        aria-label="open drawer"
        sx={{
        //   left: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          //   width: "60px",
          display: { sx: "block", sm: "none" },
        }}
      >
        <Menu />
      </IconButton>
    </AppBar>
  );
};

export default MainAppBar;
