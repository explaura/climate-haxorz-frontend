import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { EmissionContext } from "../providers/EmissionContext";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { AssignmentReturnRounded } from "@material-ui/icons";



am4core.useTheme(am4themes_animated);


const TreeConsumption = () => {
	const { emission } = useContext(EmissionContext);
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    const score = emission?.running?.fiftyPercent ;
    if (!score) return;

    const chartMin = 0;
    const chartMax = 16000;

    const data = {
      score,
      gradingData: [
        {
          title: "Captain Planet",
          color: "#0f9747",
          lowScore: 0,
          highScore: 3500
        },
        {
          title: "Planeteer",
          color: "#b0d136",
          lowScore: 3500,
          highScore: 7000
        },
        {
          title: "Hoggish Greedly",
          color: "#fdae19",
          lowScore: 7000,
          highScore: 11000
        },
        {
          title: "Captain Pollution",
          color: "#ee1f25",
          lowScore: 11000,
          highScore: 16000
        }
      ]
    };

    /**
     * Grading Lookup
     */
    function lookUpGrade(lookupScore, grades) {
      // Only change code below this line
      for (let i = 0; i < grades.length; i++) {
        if (
          grades[i].lowScore < lookupScore &&
          grades[i].highScore >= lookupScore
        ) {
          return grades[i];
        }
      }
      return null;
    }

    const chart = am4core.create("chartdiv", am4charts.GaugeChart);
    chart.hiddenState.properties.opacity = 0;
    chart.fontSize = 6;
    chart.innerRadius = am4core.percent(80);
    chart.resizable = true;

    /**
     * Normal axis
     */

    const axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = chartMin;
    axis.max = chartMax;
    axis.strictMinMax = true;
    axis.renderer.radius = am4core.percent(80);
    axis.renderer.inside = true;
    axis.renderer.line.strokeOpacity = 0.1;
    axis.renderer.ticks.template.disabled = false;
    axis.renderer.ticks.template.strokeOpacity = 1;
    axis.renderer.ticks.template.strokeWidth = 0.5;
    axis.renderer.ticks.template.length = 5;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.labels.template.radius = am4core.percent(15);
    axis.renderer.labels.template.fontSize = "0.9em";

    /**
     * Axis for ranges
     */

    const axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = chartMin;
    axis2.max = chartMax;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.grid.template.disabled = false;
    axis2.renderer.grid.template.opacity = 0.5;
    axis2.renderer.labels.template.bent = true;
    axis2.renderer.labels.template.fill = am4core.color("#000");
    axis2.renderer.labels.template.fontWeight = "bold";
    axis2.renderer.labels.template.fillOpacity = 0.3;

    /**
     Ranges
    */

    for (let grading of data.gradingData) {
      const range = axis2.axisRanges.create();
      range.axisFill.fill = am4core.color(grading.color);
      range.axisFill.fillOpacity = 0.8;
      range.axisFill.zIndex = -1;
      range.value = grading.lowScore > chartMin ? grading.lowScore : chartMin;
      range.endValue = grading.highScore < chartMax ? grading.highScore : chartMax;
      range.grid.strokeOpacity = 0;
      range.stroke = am4core.color(grading.color).lighten(-0.1);
      range.label.inside = true;
      range.label.inside = true;
      range.label.location = 0.5;
      range.label.inside = true;
      range.label.radius = am4core.percent(10);
      range.label.paddingBottom = -5; // ~half font size
      range.label.fontSize = "0.9em";
    }

    const matchingGrade = lookUpGrade(data.score, data.gradingData);

    /**
     * Label 1
     */

    const label = chart.radarContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.fontSize = "3em";
    label.x = am4core.percent(50);
    label.paddingBottom = 15;
    label.horizontalCenter = "middle";
    label.verticalCenter = "bottom";
    label.text = data.score.toFixed(1);
    label.fill = am4core.color(matchingGrade.color);

    /**
     * Label 2
     */

    const label2 = chart.radarContainer.createChild(am4core.Label);
    label2.isMeasured = false;
    label2.fontSize = "2em";
    label2.horizontalCenter = "middle";
    label2.verticalCenter = "bottom";
    label2.text = matchingGrade.title.toUpperCase();
    label2.fill = am4core.color(matchingGrade.color);

    /**
     * Hand
     */

    const hand = chart.hands.push(new am4charts.ClockHand());
    hand.axis = axis2;
    hand.innerRadius = am4core.percent(55);
    hand.startWidth = 8;
    hand.pin.disabled = true;
    hand.value = data.score;
    hand.fill = am4core.color("#444");
    hand.stroke = am4core.color("#000");

    hand.events.on("positionchanged", function(){
      label.text = `${axis2.positionToValue(hand.currentPosition).toFixed(1)} trees`
      const value2 = axis.positionToValue(hand.currentPosition);
      const matchingGrade = lookUpGrade(axis.positionToValue(hand.currentPosition), data.gradingData);
      label2.text = matchingGrade.title.toUpperCase();
      label2.fill = am4core.color(matchingGrade.color);
      label2.stroke = am4core.color(matchingGrade.color);
      label.fill = am4core.color(matchingGrade.color);
    })

    chartRef.current = chart;

    return () => chart.dispose();

  }, [emission, emission?.score]);

	return (

    <div id="chartdiv"></div>
	);
};

export default TreeConsumption;