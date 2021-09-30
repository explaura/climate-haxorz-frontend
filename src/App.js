import './App.css';
import { Button } from '@material-ui/core';
import RegionInput from "./components/Input/RegionInput";
import InstanceTypeInput from "./components/Input/InstanceTypeInput";

function App() {
  return (
    <div className="App">
      <RegionInput/>
      <InstanceTypeInput/>
      <Button color="primary" variant="contained">Calculate</Button>
    </div>
  );
}

export default App;