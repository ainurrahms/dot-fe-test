import './App.css';
import TextField from './components/TextField';

function App() {
  return (
    <div className="App">
      <header>
        <p>Welcome to Get Price</p>
        <p>You Must Login</p>
        <TextField id="outlined-basic" label="Username" />
      </header>
    </div>
  );
}

export default App;
