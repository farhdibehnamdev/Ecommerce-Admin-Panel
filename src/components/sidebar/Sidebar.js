import {
  ExpandMore,
  ExitToApp,
  Inventory2,
  AddCard,
  CreditCard,
  Category,
  Label,
  FeaturedPlayList,
  ContentCopy,
  Person,
} from "@mui/icons-material";
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
  IconButton,
  Grid,
  ListItemText,
  ListItem,
  styled,
} from "@mui/material";
import MainAppBar from "./AppBar";
import profileImg from "../../assets/images/user.png";
import { useState } from "react";

const drawerWidth = 240;
const MenuList = styled(List)({
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
});

const MenuListItem = styled(ListItemText)({
  textAlign: "right",
});

const Sidebar = function () {
  const [isShow, setIsShow] = useState(false);
  console.log(isShow);
  return (
    <Box>
      <MainAppBar isShow={isShow} setIsShow={setIsShow} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            top: "60px",
            boxSizing: "border-box",
            zIndex: "-999",
          },
          display: { xs: `${isShow ? "block" : "none"}`, sm: "block" },
        }}
        variant="permanent"
        anchor="right"
      >
        <List>
          <Box
            p={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
            mr={2}
            ml={2}
          >
            <Avatar src={profileImg} />
            <Typography pt={2}>زهرا چگینی</Typography>
          </Box>
          <Divider />
          <Grid container flex={1}>
            <Typography
              fontWeight="bold"
              pr={2}
              pt={2}
              pb={2}
              sx={{
                width: "100%",
                borderBottom: "1px solid #cecece",
              }}
            >
              محصولات
            </Typography>
            <Divider />
            <MenuList
              component="nav"
              aria-label="mailbox folders"
              display="flex"
              flexDirection="column"
              alignItems="start"
            >
              <ListItem button>
                <IconButton
                  aria-label="open drawer"
                  sx={{
                    color: "#717171",
                    width: "40px",
                    fontWeight: "bold",
                  }}
                >
                  <CreditCard />
                </IconButton>
                <MenuListItem primary="همه محصولات" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <IconButton
                  aria-label="open drawer"
                  sx={{
                    color: "#717171",
                    width: "40px",
                    fontWeight: "bold",
                  }}
                >
                  <AddCard />
                </IconButton>
                <MenuListItem primary="افزودن محصول جدید" />
              </ListItem>
              <ListItem button divider>
                <IconButton
                  aria-label="open drawer"
                  sx={{
                    color: "#717171",
                    width: "40px",
                    fontWeight: "bold",
                  }}
                >
                  <Category />
                </IconButton>
                <MenuListItem primary="دسته بندی محصولات" />
              </ListItem>
              <ListItem button divider>
                <IconButton
                  aria-label="open drawer"
                  sx={{
                    color: "#717171",
                    width: "40px",
                    fontWeight: "bold",
                  }}
                >
                  <Label />
                </IconButton>
                <MenuListItem primary="برچسب ها" />
              </ListItem>
              <ListItem button divider>
                <IconButton
                  aria-label="open drawer"
                  sx={{
                    color: "#717171",
                    width: "40px",
                    fontWeight: "bold",
                  }}
                >
                  <FeaturedPlayList />
                </IconButton>
                <MenuListItem primary="ویژگیها" />
              </ListItem>
              <ListItem button divider>
                <IconButton
                  aria-label="open drawer"
                  sx={{
                    color: "#717171",
                    width: "40px",
                    fontWeight: "bold",
                  }}
                >
                  <ContentCopy />
                </IconButton>
                <MenuListItem primary="تعریف گروه ها" />
              </ListItem>
            </MenuList>
          </Grid>
          <Grid
            container
            flex={1}
            sx={{
              borderBottom: "1px solid #cecece",
            }}
          >
            <IconButton
              aria-label="open drawer"
              sx={{
                color: "#717171",
                width: "40px",
                fontWeight: "bold",
              }}
            >
              <Person />
            </IconButton>
            <Typography fontWeight="bold" pb={2} pt={2} pr={2}>
              حساب کاربری
            </Typography>
          </Grid>
          <Typography
            sx={{
              margin: "10px 10px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              display: { xs: "block", sm: "none" },
            }}
          >
            <IconButton
              aria-label="open drawer"
              sx={{
                color: "#717171",
                width: "40px",
                fontWeight: "bold",
              }}
            >
              <ExitToApp />
            </IconButton>
            خروج
          </Typography>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
