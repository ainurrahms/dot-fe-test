import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
export default function Buttons(props) {
  return (
    <Box>
      <Button onClick={props.onClick} size="large" variant={props.variant}>
        {props.text}
      </Button>
    </Box>
  );
}

Buttons.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
