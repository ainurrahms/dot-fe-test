import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function TextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off">
      <TextField id={props.id} label={props.label} variant="outlined" />
    </Box>
  );
}

TextFields.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
