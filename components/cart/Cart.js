import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
  Card,
  Grid,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useFunctions } from "../../context/FunctionsContext";
import styles from "../cart/Cart.module.css";

const Cart=()=> {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cartItems, onAdd, onRemove, keyValues,totalCartPrice } = useFunctions();

  return (
    
    <Grid container spacing={0}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      
      >
        <ShoppingCartIcon />
       
      </IconButton>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        // sx={{position:"relative"}}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation" sx={{backgroundColor:"rgba(255, 208, 66, 0.545)"}}>
          <Typography variant="h6" component="div">
            <u>Shopping Cart :</u>
          </Typography>
        </Box>
        <Divider />

        {cartItems.map((product) => {
          return (
            <Grid item key={product._id} className={styles.cartGrid}>
              <Card sx={{ width: "190px",marginBottom:"50px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image={product.image}
                    alt="game pic"
                  />
                  <CardContent sx={{ height: "10px" }}>
                    <Typography
                      className={styles.typography}
                      gutterBottom
                      variant="h6"
                      component="div"
                      title={product.title}
                    >
                      {product.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <Typography
                  className={styles.typography}
                  variant="body2"
                  color="black"
                  // title={product.category.map((obj)=>{ return(`${obj.category},`)})}
                  sx={{
                    marginTop: "5px",
                    marginBottom: "5px",
                    marginLeft: "15px",
                  }}
                >
                  {/* {product.category.map((obj)=>{ return(`${obj.category},`)})} */}
                  Category:{keyValues(product.category, "category")}
                </Typography>

                <Typography
                  variant="body2"
                  color="black"
                  sx={{
                    marginTop: "5px",
                    marginBottom: "5px",
                    marginLeft: "15px",
                  }}
                >
                  price: {product.price}$
                </Typography>
                <Typography
                  className={styles.typography}
                  variant="body2"
                  color="black"
                  // title={product.console.map((obj)=>{ return(`${obj.console},`)})}
                  sx={{
                    marginTop: "5px",
                    marginBottom: "5px",
                    marginLeft: "15px",
                  }}
                >  
                  console: {keyValues(product.console, "console")} 
                </Typography>
                <CardActions>
                  Cart:
                  <Button size="small" onClick={() => onAdd(product._id,product.price)}>
                    +
                  </Button>
                  <h6>{product.qty}</h6>
                  <Button size="small" onClick={() => onRemove(product._id,product.price)}>
                    -
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
        <div style={{ }}>
          <Divider />
          <Divider />
          <Typography
                    variant="body2"
                    
                    color="red"
                    sx={{
                      display:"flex",
                      flexDirection:"column",
                      flex:"1 1 auto",
                      marginTop: "10px",
                      marginBottom: "10px",
                      marginLeft: "15px",
                    }}
                  >
                    <b>Total price : {totalCartPrice}$</b>
                    <button type="submit" style={{margin:"auto",backgroundColor:"red",color:"whitesmoke",borderRadius:"3px"}}>Purchase</button>
                  
                  </Typography>
        </div>
        
      </Drawer>
    </Grid>

  );
}

export default Cart;
