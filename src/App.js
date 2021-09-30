import "./App.css";
import { Button } from "@material-ui/core";
import RegionInput from "./components/Input/RegionInput";
import InstanceTypeInput from "./components/Input/InstanceTypeInput";
import UptimeInput from "./components/Input/UptimeInput";

function App() {
	return (
		<div className="App">
      <table cellPadding="50px" cellSpacing="50px" border="0">
        <tr>
          <RegionInput />
        </tr>
        <tr>
          <InstanceTypeInput />
        </tr>
        <tr>
          <UptimeInput />
        </tr>
        <tr>
          <Button color="primary" variant="contained">Calculate</Button>
        </tr>
      </table>
		</div>
	);
}

export default App;