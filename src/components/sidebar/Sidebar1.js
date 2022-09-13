// import {
//   styled,
//   Grid,
//   Typography,
//   Avatar,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   createTheme,
// } from "@mui/material";
// import profileImg from "../../assets/images/user.png";
// import { ExpandMore } from "@mui/icons-material/";

// const SidebarMain = styled(Grid)({
//   //   width: "460px",
//   //   height: "750px",
//   backgroundColor: "#FFFFFF",
//   border: "1px solid #CECECE",
//   borderRadius: "20px",
//   //   margin: "100px 50px 100px 20px",
//   marginLeft: "50px",
//   padding: "10px",
//   //   position: "absolute",
// });

// const SidebarTop = styled(Grid)({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   borderBottom: "1px solid #cecece",
//   paddingBottom: "15px",
// });

// const SidebarAvatar = styled(Avatar)({
//   width: "80px",
//   height: "80px",
// });

// const SidebarBottom = styled(Grid)({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "flex-start",
//   borderBottom: "1px solid #cecece",
// });

// const SidebarAccordion = styled(Accordion)({
//   width: "100%",
//   border: "none",
//   boxShadow: "none",
// });

// const SidebarTypography = styled(Typography)({
//   padding: "10px 20px",
// });

// const SidebarAccount = styled(Grid)({
//   borderBottom: "1px solid #cecece",
// });

// const Sidebar = function () {
//   return (
//     <SidebarMain sx={{ display: { xs: "none", md:"block" } }}>
//       <SidebarTop>
//         <SidebarAvatar alt="user avatar" src={profileImg} />
//         <Typography mt={1}>زهرا چگینی</Typography>
//       </SidebarTop>
//       <SidebarBottom>
//         <SidebarAccordion>
//           <AccordionSummary
//             expandIcon={<ExpandMore />}
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//           >
//             <Typography sx={{ fontWeight: "bold" }}>محصولات</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <SidebarTypography>همه محصولات</SidebarTypography>
//             <SidebarTypography>افزودن محصول جدید</SidebarTypography>
//             <SidebarTypography>دسته بندی محصولات</SidebarTypography>
//             <SidebarTypography>برچسب ها</SidebarTypography>
//             <SidebarTypography>ویژگی ها</SidebarTypography>
//             <SidebarTypography>تعریف گروه</SidebarTypography>
//           </AccordionDetails>
//         </SidebarAccordion>
//       </SidebarBottom>
//       <SidebarAccount>
//         <AccordionSummary
//           expandIcon={<ExpandMore />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>اطلاعات حساب</Typography>
//         </AccordionSummary>
//       </SidebarAccount>
//     </SidebarMain>
//   );
// };

// export default Sidebar;
