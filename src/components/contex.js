import React, { createContext} from "react";
import Items from "../assets/assets";

export const MyContext = createContext();
export const MyContextProvider = (props) => {
    const contextValue={Items}
    return (
      <MyContext.Provider value={contextValue}>
        {props.children}
      </MyContext.Provider>
    );
  };
  