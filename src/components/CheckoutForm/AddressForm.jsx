import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";

import FormInput from "./CustomTextField";
import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit="">
          <Grid container spacing={3}>
            <FormInput
              required
              name="first name"
              label="First name "
            ></FormInput>
            <FormInput required name="last name" label="Last name "></FormInput>
            <FormInput required name="address1" label="Address "></FormInput>
            <FormInput required name="city" label="City "></FormInput>
            <FormInput required name="email" label="Email "></FormInput>
            <FormInput
              required
              name="zip"
              label="ZIP / Postal code "
            ></FormInput>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
              <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value fullWidth onChange={}>
                <MenuItem key={} value={}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
