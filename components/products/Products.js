import styles from "../products/Products.module.css";
import Product from "../product/Product";
import { Card, CardMedia, Grid } from "@mui/material";
import { useFunctions } from "../../context/FunctionsContext";
import SearchBars from "../search/searchBars";

const Products = () => {
  const { productsFilteredArray } = useFunctions();

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

      <SearchBars />

      <Grid
        container
        spacing={12}
        sx={{ display: "flex", justifyContent: "center",paddingBottom:"50px"
      }}
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
            sale={product.sale}
          />
        ))}
      </Grid>
    </>
  );
};
export default Products;
