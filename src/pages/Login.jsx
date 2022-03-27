import React from 'react';
import Button from '../components/Button';
import TextField from '../components/TextField';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header>
        <p>Welcome to Multipledropdown City</p>
        <div>
          <TextField id="outlined-basic" label="Email" />
          <TextField id="outlined-basic" label="Password" />
          <Button
            onClick={() => {
              navigate('/calc');
            }}
            variant="contained"
            text="login"
          />
        </div>
      </header>
    </div>
  );
}
