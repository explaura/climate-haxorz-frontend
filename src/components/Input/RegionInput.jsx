import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const RegionInput = ({ region }) => {
	// const handleChange = () => {
	// 	console.log("changed");
	// };

	return (
		<FormControl fullWidth={true}>
			<InputLabel id="region-input-label">Region</InputLabel>
			<Select
				labelId="region-select-label"
				id="region-select"
				value={region}
				label="Region"
				// onChange={handleChange}
			>
				<MenuItem value={"ap-southeast-1"}>ap-southeast-1</MenuItem>
				<MenuItem value={"ap-southeast-2"}>ap-southeast-2</MenuItem>
				<MenuItem value={"us-west-1"}>us-west-1</MenuItem>
				<MenuItem value={"us-west-2"}>us-west-2</MenuItem>
				<MenuItem value={"us-east-1"}>us-east-1</MenuItem>
				<MenuItem value={"us-east-2"}>us-east-2</MenuItem>
			</Select>
		</FormControl>
	)
};

export default RegionInput;