import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const classes = useStyles();
  const EmptyCart = () => {
    <Typography>You have no items</Typography>;
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem item={item}></CartItem>
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className="classes.emptyButton"
              size="large"
              type="button"
              variant="contained"
              color="secondary"
            >
              Empty Cart
            </Button>
            <Button
              className="classes.checkoutButton"
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  };

  if (!cart.line_items) return "LOADING..";

  return (
    <Container>
      <div className="classes.toolbar"></div>
      <Typography className="classes.title" gutterBottom variant="h3">
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? (
        <EmptyCart></EmptyCart>
      ) : (
        <FilledCart></FilledCart>
      )}
    </Container>
  );
};

export default Cart;