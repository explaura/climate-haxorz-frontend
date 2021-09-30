import "normalize.css";
import "./App.scss";

import { useState } from "react";
import CalculateEmission from "./components/CalculateEmission";
import TreeConsumption from "./components/TreeConsumption";
import { EmissionContext } from "./providers/EmissionContext";
import { CALCULATE_EMISSION_PAGE_KEY, TREE_CONSUMPTION_PAGE_KEY, PageContext } from './providers/PageContext';

function App() {
  const [emission, setEmission] = useState(null);
  const [activePage, setActivePage] = useState(CALCULATE_EMISSION_PAGE_KEY)
// do carousel thing here from library
	return (
    <div className="App">
        <div className="c-steps">
          <PageContext.Provider value={{ activePage, setActivePage }}>
            <section className={`c-steps__page ${activePage === CALCULATE_EMISSION_PAGE_KEY ? 'is-active' : ''}`}>
              <CalculateEmission />
            </section>
            <section className={`c-steps__page ${activePage === TREE_CONSUMPTION_PAGE_KEY ? 'is-active' : ''}`}>
              {/* <TreeConsumption /> */}
              <CalculateEmission />
            </section>
          </PageContext.Provider>
        </div>
    </div>
	);
}

export default App;