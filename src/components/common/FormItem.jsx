import React from "react";
import { useSelector } from "react-redux";

import { Errors } from "../login/Errors";

import {
  Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";

export const FormItem = ({ label, value, handleValueChange, selector, Icon }) => {
  const errors = useSelector(selector);

  return (
    <Grid item>
      <FormControl variant="outlined">
        <InputLabel>{label}</InputLabel>
        <OutlinedInput
          type={label}
          value={value}
          onChange={handleValueChange}
          startAdornment={
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
      {errors ? <Errors errors={errors} /> : null}
    </Grid>
  );
};
