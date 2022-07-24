import React, { useContext, useState } from "react";
import styles from "../products/Products.module.css";
import Product from "../product/Product";
import Image from "next/image";
import {
  Autocomplete,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFunctions } from "../../context/FunctionsContext";

const Products = () => {
  const {
    categories,
    categoryFiltering,
    productsFilteredArray,
    titleSearch,
    gameSearch,
    consoleFiltering,
    consoles,
  } = useFunctions();
  // const [categoryDropdown, setCategoryDropdown] = useState("");

  return (
    <>
      <Card sx={{ marginTop: "30px" }}>
        <CardMedia
          image="https://res.cloudinary.com/dfpn73tnk/image/upload/v1658091593/wepik-futuristic-blue-holograms-gaming-twitter-header-2022617-23539_cejlcu.jpg"
          component="img"
          title="game area pic"
          height="150"
        />
      </Card>

      <Grid
        container
        spacing={12}
        sx={{
          marginTop: "50px",
          marginBottom: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "55px",
          gap: 5,
        }}
      >
        <h4 style={{ color: "white" }}>Search By Title:</h4>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={titleSearch}
          noOptionsText={"No available games"}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: 170,
            maxHeight: 49,
            backgroundColor: "white",
            alignItems: "normal",
            borderRadius: "2px",
          }}
          renderInput={(params) => (
            <TextField {...params} variant="filled" label="Select Game" />
          )}
          onChange={(e, newValue) => {
            gameSearch(newValue);
          }}
        />

        {/* ================================================== */}
        <h4 style={{ color: "white" }}>Search By Category:</h4>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={categories.map((item) => item.category)}
          noOptionsText={"No available games"}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: 170,
            maxHeight: 49,
            backgroundColor: "white",
            borderRadius: "2px",
          }}
          renderInput={(params) => (
            <TextField {...params} variant="filled" label="Select category" />
          )}
          onChange={(e, newValue) => {
            categoryFiltering(newValue);
          }}
        />

        {/* ====================================================== */}
        <h4 style={{ color: "white" }}>Search By Console:</h4>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={consoles.map((item) => item.console)}
          noOptionsText={"No available games"}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: 170,
            maxHeight: 49,
            backgroundColor: "white",
            borderRadius: "2px",
          }}
          renderInput={(params) => (
            <TextField {...params} variant="filled" label="Select console" />
          )}
          onChange={(e, newValue) => {
            consoleFiltering(newValue);
          }}
        />

        {/* <h4 style={{ color: "white" }}>Search By Category:</h4>
        <TextField
          select
          // margin="dense"
          id="standard-select-currency-native"
          onChange={(e) => {
            let searchOption = e.target.value;
            categoryFiltering(searchOption);
            setCategoryDropdown(searchOption);
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
            width: 170,
            // height: 55,
            maxHeight: 42,
            color: "black",
            borderRadius: "2px",
            // padding: "10px",
          }}
          value={categoryDropdown}
          variant="filled"
          label="Select category"
        >  
       

          <MenuItem value="All">All Games</MenuItem>
          {categories.map((obj) => {
            return (
              <MenuItem key={obj.category} value={obj.category}>
                {obj.category}
              </MenuItem>
            );
          })}
          ;
        </TextField>  */}
      </Grid>

      <Grid
        container
        spacing={12}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {productsFilteredArray.map((product) => (
          <Product
            key={product._id}
            id={product._id}
            title={product.title}
            category={product.category}
            image={product.image}
            price={product.price}
            description={product.description}
            console={product.console}
            q
          />
        ))}
      </Grid>
    </>
  );
};
export default Products;
