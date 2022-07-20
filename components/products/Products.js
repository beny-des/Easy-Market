import React, { useContext } from "react";
import styles from "../products/Products.module.css";
import HomeContext from "../../context/HomeContext";
import Product from "../product/Product";
import Image from "next/image";
import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import { Box } from "@mui/system";

const Products = () => {
  const { products } = useContext(HomeContext);

  return (
    <>
      <Card sx={{marginTop:"30px"}}>
        <CardMedia
          image="https://res.cloudinary.com/dfpn73tnk/image/upload/v1658091593/wepik-futuristic-blue-holograms-gaming-twitter-header-2022617-23539_cejlcu.jpg"
          component="img"
          title="game area pic"
          height="150"
          
        />
      </Card>
     
     
    
        <Grid container spacing={12} sx={{marginTop:"2px",display:"flex",justifyContent:"center"}}>
        
          {products.map((product) => (
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
