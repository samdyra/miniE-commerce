import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
const Cart = () => {
  const isEmpty = true;

  const EmptyCart = () => {
    <Typography>You have no items</Typography>;
  };

  const FilledCart = () => {
    <>
      <Grid container spacing={3}></Grid>
    </>;
  };

  return (
    <Container>
      <div className="classes.toolbar"></div>
      <Typography className="classes.title" variant="h3">
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart></EmptyCart> : <FilledCart></FilledCart>}
    </Container>
  );
};

export default Cart;
