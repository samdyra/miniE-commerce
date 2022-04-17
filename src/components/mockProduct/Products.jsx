import React from "react";
import { Grid, Button } from "@material-ui/core";
import Product from "./Product";

import useStyles from "./productsStyles";

const Products = ({ products, onAddToCart, totalItems }) => {
  const classes = useStyles();

  return (
    <>
      <main>
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{ margin: "20px 20px 5px 20px" }}
            >
              <Product product={product} onAddToCart={onAddToCart}></Product>
            </Grid>
          ))}
        </Grid>
      </main>
      <a
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        href="/CartScreen"
      >
        <Button color="secondary" variant="contained">
          Go to Cart (total items : {totalItems})
        </Button>
      </a>
    </>
  );
};

export default Products;
