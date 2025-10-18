import { createContext } from "react";

export const CounterContext =createContext(null);

export const CounterProvider =(props)=>{

    return(
        <CounterContext.Provider value={{name:"juned"}}>
            {props.children}
        </CounterContext.Provider>
    )
}