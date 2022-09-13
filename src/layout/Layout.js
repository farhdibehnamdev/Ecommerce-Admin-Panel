import { Grid, styled } from "@mui/material";
import LoginForm from "../components/login/LoginForm";
import Dashboard from "../dashboard/Dashboard";
import Sidebar from "../components/sidebar/Sidebar1";

const Main = styled(Grid)({
  backgroundColor: "#F5F8FA",
  width: "100vw",
  height: "100vh",
  padding: "100px 20px 0 20px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
//   flexWrap: "wrap",
});
const Layout = function () {
  return (
    <Main container>
      <Grid md={4}>
        <Sidebar />
      </Grid>
      <Grid md={8}>
        <Dashboard />
      </Grid>
    </Main>
  );
};

export default Layout;
