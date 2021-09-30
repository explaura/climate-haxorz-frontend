import { createContext } from "react";

export const CALCULATE_EMISSION_PAGE_KEY = "/CALCULATE_EMISSION";
export const TREE_CONSUMPTION_PAGE_KEY = "/TREE_CONSUMPTION";

export const PageContext = createContext({
    activePage: CALCULATE_EMISSION_PAGE_KEY,
    setActivePage: () => {}
});