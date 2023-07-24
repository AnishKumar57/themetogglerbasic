import React, { useContext } from 'react';
import  "./App.css";
import { ThemeContext } from './contexts/Themeprovider';
 

function App(){
  const {toggle, toggleFunction}= useContext(ThemeContext);
  console.log(toggle ); 
  return (
    <div className="app" style={{backgroundColor:toggle ? 'pink' : 'white'}}>
      <div className="section">
      <h1>Context Api</h1>
      <button onClick={toggleFunction }>Change the Theme</button>
      </div>
    </div>
  );
}

export default App;