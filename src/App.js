import "normalize.css";
import "./App.scss";

import { useEffect, useState } from "react";
import CalculateEmission from "./components/CalculateEmission";
import TreeConsumption from "./components/TreeConsumption";
import { EmissionContext } from "./providers/EmissionContext";
import { CALCULATE_EMISSION_PAGE_KEY, TREE_CONSUMPTION_PAGE_KEY, PageContext } from './providers/PageContext';

function App() {
  const [emission, setEmission] = useState({});
  const [activePage, setActivePage] = useState(CALCULATE_EMISSION_PAGE_KEY)
  const [position, setPosition] = useState(0);

  // useEffect(() => {
  //   setInterval(() => setPosition(p => p + 1), 500)
  // }, [])

	// TODO: do carousel thing here from library

	return (
    <div className="App">
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap" rel="stylesheet"></link>

<script src="https://cdn.amcharts.com/lib/4/core.js"/>
        <script src="https://cdn.amcharts.com/lib/4/charts.js"/>
        <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"/>
        
        <div className="c-steps">
          <h2 style={{ fontSize: "5rem", color: "rgba(175, 37, 32)", position: "absolute", top: "20", left: `20rem`, fontFamily: "Roboto" }} >ECTree</h2>
          <EmissionContext.Provider value={{ emission, setEmission }}>
            <PageContext.Provider value={{ activePage, setActivePage }}>
              <section className={`c-steps__page ${activePage === CALCULATE_EMISSION_PAGE_KEY ? 'is-active' : ''}`}>
                <div className="c-calculate-emission__background-container">
                  <img className="c-calculate-emission__background" src="/images/bezos.png"/>
                </div>
                <CalculateEmission />
              </section>
              <section className={`c-steps__page ${activePage === TREE_CONSUMPTION_PAGE_KEY ? 'is-active' : ''}`}>
                <TreeConsumption />
                {/* dsds
                <CalculateEmission /> */}
              </section>
            </PageContext.Provider>
          </EmissionContext.Provider>
        </div>
    </div>
	);
}

export default App;