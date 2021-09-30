import { TextField } from '@mui/material';

const UptimeInput = ({ inputProps }) => {
	return (
		<TextField id="time" type="number" inputProps={inputProps} />
	)
};

export default UptimeInput;