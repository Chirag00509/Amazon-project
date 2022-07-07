import React, { createContext, useContext, useReducer } from 'react';

// Preper DataLayer
export const StateContext = createContext();

//Wrap our app and provide the Data Lyaer

export const StateProvider = ({ reducer , 
   initialState, children }) => (
       <StateContext.Provider value = {useReducer(
           reducer,initialState
       )}>
           {children}
       </StateContext.Provider>
   );

//   Pull the information the data lyaer 
export const useStateValue = () => useContext(StateContext);   