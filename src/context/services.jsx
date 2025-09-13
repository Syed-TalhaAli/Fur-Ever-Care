import React, { createContext } from "react";
import animalesData from "../data/animales.json";

export const AnimalesContext = createContext();

export const AnimalesProvider = ({ children }) => {
    return (
        <AnimalesContext.Provider value={animalesData}>
            {children}
        </AnimalesContext.Provider>
    );
};
