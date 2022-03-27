import './App.css';
import Button from './components/Button';
import TextField from './components/TextField';

function App() {
  return (
    <div className="App">
      <header>
        <p>Welcome to Get Price</p>
        <p>You Must Login</p>
        <div>
          <TextField id="outlined-basic" label="Username" />
          <TextField id="outlined-basic" label="Password" />
          <Button variant="contained" text="login" />
        </div>
      </header>
    </div>
  );
}

export default App;
