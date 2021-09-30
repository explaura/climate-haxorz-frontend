import './App.css';
import { Button } from '@material-ui/core';
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <Input/>
      <Button color="primary" variant="contained">Calculate</Button>
    </div>
  );
}

export default App;