import { useContext } from 'react';
import { EmissionContext } from '../providers/EmissionContext';
import { ResponsiveWaffle } from "@nivo/waffle";

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

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
const TreeConsumption = () => {
    const { emission } = useContext(EmissionContext);
    
    return (
            <ResponsiveWaffle
                data={carbonEmissions}
                total={100}
                rows={18}
                columns={14}
                margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
                colors={{ scheme: "accent" }}
                borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
                animate={true}
                motionStiffness={90}
                motionDamping={11}
                height={100}
                legends={[
                    {
                        anchor: "top-left",
                        direction: "column",
                        justify: false,
                        translateX: -100,
                        translateY: 0,
                        itemsSpacing: 4,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        itemTextColor: "#777",
                        symbolSize: 20,
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemTextColor: "#000",
                                    itemBackground: "#f7fafb"
                                }
                            }
                        ]
                    }
                ]}
            />
    );      
}

export default TreeConsumption