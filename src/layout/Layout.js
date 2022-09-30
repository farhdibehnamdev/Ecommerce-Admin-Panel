import { Grid, styled } from "@mui/material";
import LoginForm from "../components/login/LoginForm";
import Dashboard from "../dashboard/Dashboard";
import ProductList from "../components/products/ProductList";
import Sidebar from "./../components/sidebar/Sidebar";

const Main = styled(Grid)({
  width: "100vw",
  height: "100vh",
  padding: "100px 20px 0 20px",
  //   flexWrap: "wrap",
});
const Layout = function () {
  return (
    <Main container>
      <Sidebar />
      <Dashboard />
    </Main>
  );
};

export default Layout;
