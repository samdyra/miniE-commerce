import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";

const products = [
  {
    id: 1,
    name: "shoes",
    desc: "running shoes",
    price: "$5",
    image: "https://cdn.kibrispdr.org/data/random-pic-0.jpg",
  },
  {
    id: 2,
    name: "Macbook",
    desc: "Apple Macbook",
    price: "$10",
    image: "https://cdn.kibrispdr.org/data/random-pic-0.jpg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}></Product>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
