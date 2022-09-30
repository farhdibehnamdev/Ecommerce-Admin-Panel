import { Grid, styled } from "@mui/material";
import ProductList from "./../components/products/ProductList";

const DashboardMain = styled(Grid)({
  // backgroundColor: "red",
  border: "1px solid #CECECE",
  // borderRadius: "20px",
  padding: "10px",
  margin: "0 auto",
  // width: "85%",
  width: "85%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
});
const Dashboard = function () {
  return (
    <DashboardMain>
      <ProductList />
    </DashboardMain>
  );
};
export default Dashboard;
