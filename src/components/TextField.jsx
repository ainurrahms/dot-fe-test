import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function BasicTextFields({ id, label }) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off">
      <TextField id={id} label={label} variant="outlined" />
    </Box>
  );
}

BasicTextFields.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
