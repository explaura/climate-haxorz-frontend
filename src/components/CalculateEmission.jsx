import InstanceTypeInput from "./Input/InstanceTypeInput";
import RegionInput from "./Input/RegionInput";
import UptimeInput from "./Input/UptimeInput";
import '../styles/calculate-emissions.scss';
import { useForm } from "react-hook-form";
import { Button } from "@material-ui/core";

export default function CalculateEmission() {
    const { emissionData, handleSubmit } = useForm();

    async function onSubmit (...args) {
        console.log(args)
        // console.log(emissionData)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="c-calculate-emission">
            <RegionInput />
            <InstanceTypeInput />
            <UptimeInput />
            <Button type="submit" color="primary" variant="contained">Calculate</Button>
        </form>
    );
}