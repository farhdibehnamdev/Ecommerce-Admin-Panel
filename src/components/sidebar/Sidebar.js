import { ExpandMore } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  Toolbar,
  Typography,
  Avatar,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import MainAppBar from "./AppBar";
import profileImg from "../../assets/images/user.png";
import { useState } from "react";

const drawerWidth = 240;

const Sidebar = function () {
  const [isShow, setIsShow] = useState(false);
  console.log(isShow);
  return (
    <Box>
      <MainAppBar isShow={isShow} setIsShow={setIsShow} />
      <Drawer
        sx={{
          width: drawerWidth,
          zIndex: "999",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: `${isShow ? "block" : "none"}`, sm: "block" },
        }}
        variant="permanent"
        anchor="right"
      >
        {/* <Toolbar /> */}
        <Divider />
        <List>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              borderBottom: "1px solid #cecece",
              padding: "20px 0",
              margin: "0 10px 0 10px",
            }}
          >
            <Avatar src={profileImg} />
            <Typography sx={{ pt: 2 }}>زهرا چگینی</Typography>
          </Box>
          <Grid
            container
            flex={1}
            sx={{
              borderBottom: "1px solid #cecece",
              margin: "0 10px 0 10px",
            }}
          >
            <Accordion
              sx={{
                width: "100%",
                boxShadow: 0,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontWeight: "bold" }}>محصولات</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="subtitle1">همه محصولات</Typography>
                <Typography variant="subtitle1">افزودن محصول جدید</Typography>
                <Typography variant="subtitle1">دسته بندی محصولات</Typography>
                <Typography variant="subtitle1">برچسب ها</Typography>
                <Typography variant="subtitle1">ویژگیها</Typography>
                <Typography variant="subtitle1">تعریف گروه</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid
            container
            flex={1}
            sx={{
              borderBottom: "1px solid #cecece",
              margin: "0 10px",
            }}
          >
            <Accordion
              sx={{
                width: "100%",
                boxShadow: 0,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontWeight: "bold" }}>حساب کاربری</Typography>
              </AccordionSummary>
            </Accordion>
          </Grid>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
