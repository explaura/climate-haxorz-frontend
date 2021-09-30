import "./App.scss";
import { Button } from "@material-ui/core";
import RegionInput from "./components/Input/RegionInput";
import InstanceTypeInput from "./components/Input/InstanceTypeInput";
import UptimeInput from "./components/Input/UptimeInput";
import CalculateEmission from "./components/CalculateEmission";

function App() {
  const calculate = () => {
    // TODO: start progress bar
    //  call API
    console.log("calculating");
  };

	return (
		<div className="App">
      <CalculateEmission />
      {/* <table cellPadding="50px" cellSpacing="50px" border="0">
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
          <Button color="primary" variant="contained" onClick={calculate}>Calculate</Button>
        </tr>
      </table> */}
		</div>
	);
}

export default App;