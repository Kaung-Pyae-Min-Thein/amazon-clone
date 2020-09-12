import React, { createContext, useContext, useReducer, Children } from "react";

//prepare the dataLayer
export const StateContext = createContext();

//wrap our app and provide the data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);
