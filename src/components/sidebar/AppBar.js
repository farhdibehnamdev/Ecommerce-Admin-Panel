import { ExitToApp, Menu } from "@mui/icons-material";
import { AppBar, IconButton } from "@mui/material";

const MainAppBar = function ({ setIsShow, isShow }) {
  const toggleDrawerOpen = () => {
    setIsShow(!isShow);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        height: "60px",
        bgcolor: "#F5F8FA",
        display: "flex",
        alignItems: "end",
        justifyContent: "center",
      }}
    >
      <IconButton
        onClick={toggleDrawerOpen}
        aria-label="open drawer"
        sx={{
          color: "#717171",
          width: "40px",
          left: "20px",
          display: { sm: "none" },
          cursor: "pointer",
        }}
      >
        <Menu />
      </IconButton>
      <IconButton
        aria-label="open drawer"
        sx={{
          color: "#717171",
          width: "40px",
          top: "5px",
          left: "20px",
          fontWeight: "bold",
          display: { xs: "none", sm: "block" },
          cursor: "pointer",
        }}
      >
        <ExitToApp />
      </IconButton>
    </AppBar>
  );
};

export default MainAppBar;
