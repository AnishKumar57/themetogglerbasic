import React,{useState} from 'react';


export const ThemeContext  = React.createContext(false);

export default function ThemeProvider({children} ) {
    console.log(children)
    const [toggle, setToggle] =useState(false);
    const toggleFunction= ()=> {
        setToggle(!toggle);
    }
    return(

        <ThemeContext.Provider value={{toggle, toggleFunction}}>
            {children}
        </ThemeContext.Provider>

    );
}