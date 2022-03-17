import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";

const Products = ({ products, onAddToCart, totalItems }) => {
  return (
    <>
      <main>
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart}></Product>
            </Grid>
          ))}
        </Grid>
      </main>
      <button>{totalItems}</button>
    </>
  );
};

export default Products;
