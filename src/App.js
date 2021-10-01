import "normalize.css";
import "./App.scss";

import { useState } from "react";
import CalculateEmission from "./components/CalculateEmission";
import TreeConsumption from "./components/TreeConsumption";
import { EmissionContext } from "./providers/EmissionContext";
import { CALCULATE_EMISSION_PAGE_KEY, TREE_CONSUMPTION_PAGE_KEY, PageContext } from './providers/PageContext';

function App() {
  const [emission, setEmission] = useState({});
  const [activePage, setActivePage] = useState(CALCULATE_EMISSION_PAGE_KEY)
	// TODO: do carousel thing here from library

	return (
    <div className="App">


<script src="https://cdn.amcharts.com/lib/4/core.js"/>
        <script src="https://cdn.amcharts.com/lib/4/charts.js"/>
        <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"/>
        <div className="c-steps">
          <EmissionContext.Provider value={{ emission, setEmission }}>
            <PageContext.Provider value={{ activePage, setActivePage }}>
              <section className={`c-steps__page ${activePage === CALCULATE_EMISSION_PAGE_KEY ? 'is-active' : ''}`}>
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