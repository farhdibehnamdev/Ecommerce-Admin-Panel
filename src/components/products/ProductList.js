import * as React from "react";
import {
  Autocomplete,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableRow,
} from "@mui/material/";
import InputFilter from "../common/InputFilter";
import AddButton from "./../common/AddButton";

import SearchFiled from "../common/SearchFiled";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "image",
    headerName: "تصویر",
    width: 150,
    editable: true,
  },
  {
    field: "Name",
    headerName: "نام",
    width: 150,
    editable: true,
  },
  {
    field: "productId",
    headerName: "شناسه محصول",
    width: 150,
    editable: true,
  },
  {
    field: "quantity",
    headerName: "موجودی",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
];

const filterProducts = (e) => {
  e.preventdefault();
};

const ProductList = function () {
  return (
    <>
      <Box sx={{ height: "80%", width: "100%" }}>
        <Typography variant="h6" p={1}>
          همه محصولات
        </Typography>
        <Grid
          pb={1}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AddButton sx={{ height: "40px" }} />
          <SearchFiled />
        </Grid>
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          mb={2}
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            //   options={top100Films}
            sx={{ width: 200, mt: 2 }}
            renderInput={(params) => (
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    height: "40px",
                  },
                  "& .MuiFormLabel-root": {
                    position: "absolute",
                    top: "-4px",
                    fontSize: "12px",
                  },
                }}
                {...params}
                label="فیلتر براساس دسته بندی"
              />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            //   options={top100Films}
            sx={{ width: 200, mt: 2 }}
            renderInput={(params) => (
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    height: "40px",
                  },
                  "& .MuiFormLabel-root": {
                    position: "absolute",
                    top: "-8px",
                  },
                }}
                {...params}
                label="فیلتر براساس نوع محصول"
              />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            //   options={top100Films}
            sx={{ width: 200, mt: 2 }}
            renderInput={(params) => (
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    height: "40px",
                  },
                  "& .MuiFormLabel-root": {
                    position: "absolute",
                    top: "-8px",
                  },
                }}
                {...params}
                label="فیلتر براساس موجودی"
              />
            )}
          />
          <Autocomplete
            item
            xl={2.3}
            disablePortal
            id="combo-box-demo"
            //   options={top100Films}
            sx={{ width: 200, mt: 2 }}
            renderInput={(params) => (
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    height: "40px",
                  },
                  "& .MuiFormLabel-root": {
                    position: "absolute",
                    top: "-8px",
                  },
                }}
                {...params}
                label="فیلتر براساس تاریخ"
              />
            )}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#ECF1FB",
              color: "#33475B",
              boxShadow: "none",
              border: "1px solid #cecece",
              width: "200px",
              height: "40px",
              mt: "16px",
            }}
          >
            حذف فیلترها
          </Button>
        </Grid>
        <Paper>
          <TableContainer
            sx={{
              border: "1px solid #cecece",
              boxShadow: "none",
              borderRadius: "8px",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Button
                      variant="outlined"
                      sx={{ background: "#fff" }}
                      // onClick={handleSelectAllClick}
                    >
                      انتخاب همه
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </>
  );
};
export default ProductList;
