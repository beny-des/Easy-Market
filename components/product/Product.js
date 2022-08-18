import React from "react";
import styles from "../product/Product.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Rating,
} from "@mui/material";
import { useFunctions } from "../../context/FunctionsContext";
import Link from "next/link";
import Image from "next/image";

const Product = ({ image, title, price, id, category, console, sale }) => {
  const { onAdd, onRemove, qtyCheck, keyValues } = useFunctions();

  return (
    
    <Grid item key={id}>
      <div  className={styles.productContainer}>
        <Card className={styles.productCard}>
          <CardActionArea>
            <Link href={`/gameDetails/${[id]}`}>
              <div>
                <CardMedia
                  component="img"
                  height="180"
                  image={image}
                  alt="game pic"
                  
                />

                {sale === true ? (
                  <CardMedia
                    component="img"
                    sx={{ position: "absolute", top: "0%" }}
                    image={
                      "https://res.cloudinary.com/dfpn73tnk/image/upload/v1658907763/sale-banner_idtkqo.png"
                    }
                    alt="game pic"
                  />
                ) : null}
              </div>
            </Link>
            <CardContent>
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
            {sale === "true" ? price * 0.5 : price} $
          </Typography>

          <Typography
            className={styles.typography}
            // title={keyValues(console, "console")}
            variant="body2"
            color="black"
            sx={{
              marginTop: "5px",
              marginBottom: "5px",
              marginLeft: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <b>console:</b>
            {console.map((obj) => {
              return (
                <div key={obj.id} style={{ marginLeft: "7px" }}>
                  <Image
                    src={obj.image}
                    alt={"console pic"}
                    width={25}
                    height={25}
                  />
                </div>
              );
            })}
          </Typography>
          <CardActions className={styles.center}>
            <b>Cart:</b>
            <Button size="large" onClick={() => onAdd(id, price)}>
              +
            </Button>

            <h4>{`${qtyCheck(id)}`}</h4>

            {qtyCheck(id) > 0 && (
              <Button size="large" onClick={() => onRemove(id, price)}>
                -
              </Button>
            )}
          </CardActions>
        </Card>
      </div>
    </Grid>
  );
};
export default Product;
