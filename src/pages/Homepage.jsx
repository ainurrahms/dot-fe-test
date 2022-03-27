import React from 'react';
import Button from '../components/Button';
import SelectField from '../components/SelectField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

const onClick = () => {
  console.log('halo');
};

export default function Homepage() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <p>Calculate Cost</p>
        <div>
          <SelectField value={currency} onChange={handleChange}>
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </SelectField>
          <SelectField value={currency} onChange={handleChange}>
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </SelectField>
          <div>
            <Button onClick={onClick} variant="contained" text="back" />
            <Button onClick={onClick} variant="contained" text="calculate" />
          </div>
        </div>
      </header>
    </div>
  );
}
