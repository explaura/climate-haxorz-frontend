import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const InstanceTypeInput = ({ instanceType }) => {
	const handleChange = () => {
		console.log("changed");
	};

	return (
		<FormControl fullWidth={true}>
			<InputLabel id="instance-type-input-label">Instance Type</InputLabel>
			<Select
				labelId="instance-type-select-label"
				id="instance-type-select"
				value={instanceType}
				label="Instance Type"
				onChange={handleChange}
			>
				<MenuItem value={"a1.medium"}>a1.medium</MenuItem>
				<MenuItem value={"a1.large"}>a1.large</MenuItem>
				<MenuItem value={"a1.xlarge"}>a1.xlarge</MenuItem>
				<MenuItem value={"a1.2xlarge"}>a1.2xlarge</MenuItem>
				<MenuItem value={"a1.4xlarge"}>a1.4xlarge</MenuItem>
				<MenuItem value={"a1.metal"}>a1.metal</MenuItem>
			</Select>
		</FormControl>
	)
};

export default InstanceTypeInput;