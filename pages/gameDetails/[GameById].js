import React, { useEffect, useState } from "react";
import { useFunctions } from "../../context/FunctionsContext";
import { useRouter } from "next/router";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import styles from "../gameDetails/GameById.module.css";
import YoutubeVideo from "../../components/madia/MediaVideo";

const GameById = (props) => {
  const router = useRouter();
  const { GameById } = router.query;

  const { allProducts, onAdd, onRemove, keyValues, qtyCheck } = useFunctions();

  const gameChosen = allProducts.find((game) => game._id === GameById);

  // console.log("gameChosen", gameChosen.media);
  return (
    <div className={styles.body}>
      {/* <Grid item> */}
      <Card sx={{ marginTop: "5px" }}>
        <CardMedia
          image="https://res.cloudinary.com/dfpn73tnk/image/upload/v1658744059/wepik-futuristic-blue-holograms-gaming-twitter-header-2022625-13138_oqiga4.png"
          component="img"
          title="game area pic"
          height="190"
        />
      </Card>
      <Grid  className={styles.gridContainer} container sx={{display:"flex",flexDirection:"row",marginTop:"50px",justifyContent:"center",}}>
     
        <Grid item>
          <YoutubeVideo media={gameChosen?.media} />
        </Grid>

        {gameChosen?._id && (
          <Grid item key={gameChosen._id} className={styles.productCard}>
            <Card className={styles.image}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={gameChosen.image}
                  alt="game pic"
                />

                <CardContent sx={{ height: "50px" }}>
                  <Typography
                    className={styles.title}
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{}}
                  >
                    {gameChosen.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Typography
                className={styles.typography}
                variant="body2"
                color="black"
                sx={{
                  marginTop: "5px",
                  marginBottom: "5px",
                  marginLeft: "15px",
                }}
              >
                <b>Category: </b>

                {keyValues(gameChosen.category, "category")}
              </Typography>
              <Typography
                className={styles.typography}
                variant="body2"
                color="black"
                sx={{
                  marginTop: "5px",
                  marginBottom: "5px",
                  marginLeft: "15px",
                }}
              >
                <b>Price: </b>
                {gameChosen.price}$
              </Typography>
              <Typography
                className={styles.typography}
                variant="body2"
                color="black"
                sx={{
                  marginTop: "5px",
                  marginBottom: "5px",
                  marginLeft: "15px",
                }}
              >
                <b>Console: </b>

                {keyValues(gameChosen.console, "console")}
              </Typography>
              <Typography
                className={styles.typography}
                variant="body2"
                color="black"
                sx={{
                  marginTop: "5px",
                  marginBottom: "5px",
                  marginLeft: "15px",
                }}
              >
                <b>Description: </b>
                {gameChosen.description}
              </Typography>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <b>Cart:</b>
                <Button
                  size="large"
                  onClick={() => onAdd(gameChosen._id, gameChosen.price)}
                >
                  +
                </Button>
                <h4>{`${qtyCheck(gameChosen._id)}`}</h4>
                {qtyCheck(gameChosen._id) > 0 && (
                  <Button
                    size="large"
                    onClick={() => onRemove(gameChosen._id, gameChosen.price)}
                  >
                    -
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default GameById;
