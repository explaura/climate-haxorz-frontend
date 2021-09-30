import '../styles/calculate-emissions.scss';
import { useState } from "react";

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

export default function CalculateEmission() {
    const [region, setRegion] = useState(regionValues[0]);
    const [instanceType, setInstanceType] = useState(instanceTypeValues[0]);
    const [uptime, setUptime] = useState(0);

    const [emission, setEmission] = useState();

    async function onSubmit (event) {
        event.preventDefault();
        console.log({
            region, instanceType, uptime
        });

        try {
            
        } catch (error) {
            
        }
    }

    return (
        <>
            <form onSubmit={onSubmit} className="c-calculate-emission">
                <select type="select" value={region} onChange={(event) => setRegion(event.target.value)}>
                    {regionValues.map(regionValue => <option key={regionValue} value={regionValue}>{regionValue}</option>)}
                </select>
                <select type="select" value={instanceType} onChange={(event) => setInstanceType(event.target.value)}>
                    {instanceTypeValues.map(instanceTypeValue => <option key={instanceTypeValue} value={instanceTypeValue}>{instanceTypeValue}</option>)}
                </select>
                <div>
                    <label>Uptime</label>
                    <input value={uptime} type="number" onChange={(event) => setUptime(event.target.value)}/>
                </div>

                <button type="submit" >Submit</button>
            </form>
            <div>{JSON.stringify(emission)}</div>
        </>
    );
}