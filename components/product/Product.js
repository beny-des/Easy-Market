import React from "react";
import styles from "../product/Product.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { useFunctions } from "../../context/FunctionsContext";
import Link from "next/link";

const Product = ({
  image,
  title,
  price,
  id,
  category,
  console,
  description,
}) => {
  const { onAdd, onRemove, qtyCheck, keyValues } = useFunctions();

  // global.console.log("cartItems",cartItems);

  return (
    <Grid item>
      <div className={styles.productContainer}>
        <Card className={styles.productCard}>
          <CardActionArea>
            <Link href={`/gameDetails/${[id]}`}>
            <CardMedia
              component="img"
              height="180"
              image={image}
              alt="game pic"
           
            /></Link>
            <CardContent sx={{ height: "50px" }}>
              <Typography
                className={styles.typography}
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                title={title}
              >
                {title}
              </Typography>
            </CardContent>
          </CardActionArea>

          <Typography
            className={styles.typography}
            title={keyValues(category, "category")}
            variant="body2"
            color="black"
            sx={{ marginTop: "5px", marginBottom: "5px", marginLeft: "15px" }}
          >
            
            <b>Category:</b> {keyValues(category, "category")}
          </Typography>

          <Typography
            className={styles.typography}
            variant="body2"
            color="black"
            sx={{ marginTop: "5px", marginBottom: "5px", marginLeft: "15px" }}
          >
            <b>price: </b>
            {price}$
          </Typography>
          <Typography
            className={styles.typography}
            title={keyValues(console, "console")}
            variant="body2"
            color="black"
            sx={{ marginTop: "5px", marginBottom: "5px", marginLeft: "15px",}}
          >
            <b>console:</b> {keyValues(console, "console")}
          </Typography>
          <CardActions sx={{ marginLeft: "45px" }}>
            <b>Cart:</b>
            <Button size="large" onClick={() => onAdd(id,price)}>
              +
            </Button>
            <h4>{`${qtyCheck(id)}`}</h4>
            {
              qtyCheck(id)>0 &&
              <Button size="large" onClick={() => onRemove(id,price)}>
                -
              </Button>
            }
          </CardActions>
        </Card>
      </div>
    </Grid>
  );
};
export default Product;
