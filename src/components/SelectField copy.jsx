import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function SelectFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off">
      <TextField select label="Select" value={props.value} onChange={props.onChange}></TextField>
    </Box>
  );
}

SelectFields.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  )
};
