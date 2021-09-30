import { createContext } from "react";

export const EmissionContext = createContext({
    emission: {},
    setEmission: () => {}
});