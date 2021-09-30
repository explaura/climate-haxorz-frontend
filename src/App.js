import "./App.css";
import TreeConsumption from "./components/Results/TreeConsumption";

function App() {
	const carbonEmissions = [
		{
			id: "Eucalyptus",
			value: 17,
			label: "Eucalyptus"
		},
		{
			id: "Jacaranda",
			value: 25,
			label: "Jacaranda"
		},
		{
			id: "Banksia",
			value: 3,
			label: "Banksia"
		},
		{
			id: "Wattle",
			value: 33,
			label: "Wattle"
		},
	];

	return (
		<div className="treez">
				<TreeConsumption data={carbonEmissions}/>
		</div>
	);
}

export default App;