import React from 'react';

import { Typography, Grid } from '@material-ui/core';

export const Errors = ({ errors }) => {
  return (
    <Grid item>
      {errors.map((error, id) => (
        <Typography key={`error_id_${id}`} color="error" variant="subtitle1">
          {error}
        </Typography>
      ))}
    </Grid>
  );
};
