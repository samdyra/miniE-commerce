import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  Typography,
  CircularProgress,
  Divider,
  Button,
  StepLabel,
} from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

const steps = ["Shipping address", "Payment details"];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const Confirmation = () => {
    <div>Confirmation</div>;
  };

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm></AddressForm>
    ) : (
      <PaymentForm></PaymentForm>
    );
  return (
    <>
      <div className={classes.toolbar}></div>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation></Confirmation>
          ) : (
            <Form></Form>
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
