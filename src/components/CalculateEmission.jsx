import '../styles/calculate-emissions.scss';
import { useState } from "react";
import { Select, MenuItem, Button, TextField, FormControl, InputLabel, Box, CircularProgress } from "@mui/material";

const regionValues = [
    "us-east-2",
    "us-east-1",
    "us-west-1",
    "us-west-2",
    "af-south-1",
    "ap-east-1",
    "ap-south-1",
    "ap-northeast-3",
    "ap-northeast-2",
    "ap-southeast-1",
    "ap-southeast-2",
    "ap-northeast-1",
    "ca-central-1",
    "cn-north-1",
    "cn-northwest-1",
    "eu-central-1",
    "eu-west-1",
    "eu-west-2",
    "eu-west-3",
    "eu-north-1",
    "eu-south-1",
    "me-south-1",
    "sa-east-1",
    "us-gov-west-1",
    "us-gov-east-1"
];

const instanceTypeValues = [
    "t2.micro",
    "t2.nano"
]

const mockEmission = {
    "manufacturing": 16.2,
    "running": {
      "idle": "4.5",
      "tenPercent": "7.2",
      "fiftyPercent": "12.1",
      "hundredPercent": "15.9"
    },
    "ecoProfile": [
        {
            "title": "Captain Pollution",
            "min": 6,
            "recommendations": [
                "Quit your tech job",
                "Get AWS certified",
                "Eat more veggies"
            ]
        }
    ]
}

export default function CalculateEmission() {
    const [region, setRegion] = useState(null);
    const [instanceType, setInstanceType] = useState(null);
    const [uptime, setUptime] = useState(0);

    const [emission, setEmission] = useState();
    const [loading, setLoading] = useState(false);

    async function onSubmit (event) {
        event.preventDefault();

        try {
            setLoading(true);
            await new Promise((res) => setTimeout(res, 2000));
            setEmission(mockEmission);
        } catch (error) {
            console.error(error);
        }

        console.log({ region, instanceType, uptime });
        setLoading(false);
    }

    return (
        <form onSubmit={onSubmit} className="c-calculate-emission">
            <Box m={0.5}>
                <FormControl fullWidth className="c-calculate-emission__region" >
                    <InputLabel>Region</InputLabel>
                    <Select className="c-calculate-emission__region" type="select" value={region} onChange={(event) => setRegion(event.target.value)}>
                        {regionValues.map(regionValue => <MenuItem key={regionValue} value={regionValue}>{regionValue}</MenuItem>)}
                    </Select>
                </FormControl>
            </Box>
            <Box m={0.5}>
                <FormControl fullWidth className="c-calculate-emission__instance-type">
                    <InputLabel>Instance Type</InputLabel>
                    <Select type="select" value={instanceType} onChange={(event) => setInstanceType(event.target.value)}>
                        {instanceTypeValues.map(instanceTypeValue => <MenuItem key={instanceTypeValue} value={instanceTypeValue}>{instanceTypeValue}</MenuItem>)}
                    </Select>
                </FormControl>
            </Box>
            <Box m={0.5}>
                <TextField fullWidth className="c-calculate-emission__uptime" label="Uptime" value={uptime} type="number" onChange={(event) => setUptime(event.target.value)}/>
            </Box>
            <Box m={0.5}>
                <Button fullWidth size="large" className="c-calculate-emission__submit" type="submit" color="primary" variant="contained">{loading ? <CircularProgress size={25}/> : "Calculate Emission"}</Button>
            </Box>
        </form>
    );
}