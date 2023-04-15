"use client"
import { createContext, useState, useContext } from "react";
const ContextProvider = createContext();

export const useAuth = () => {return useContext(ContextProvider)}

export const AuthProvider = ({children}) => {
    const [signedin, setSignedin] = useState(false);
    const [data, setData] = useState([]); // firestore db
    
    const value = {
        signedin, setSignedin,
        data, setData,
    };
  
    return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
    );
  };


