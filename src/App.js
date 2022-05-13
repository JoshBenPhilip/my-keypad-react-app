import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [numberString, setNumberString] = useState("")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <keypadOutput>{numberString}</keypadOutput>
        <keypadLine1>
        <button onClick= {()=>setNumberString ( numberString + "1" )}>1</button>
        <button onClick= {()=>setNumberString (numberString + "2" )}>2</button>
        <button onClick= {()=>setNumberString (numberString + "3" )}>3</button>
        </keypadLine1>
        <keypadLine1>
        <button onClick= {()=>setNumberString ( numberString + "4" )}>4</button>
        <button onClick= {()=>setNumberString (numberString + "5" )}>5</button>
        <button onClick= {()=>setNumberString (numberString + "6" )}>6</button>
        </keypadLine1>
        <keypadLine1>
        <button onClick= {()=>setNumberString ( numberString + "7" )}>7</button>
        <button onClick= {()=>setNumberString (numberString + "8" )}>8</button>
        <button onClick= {()=>setNumberString (numberString + "9" )}>9</button>
        </keypadLine1>
        

        <keypadLine1>
        {/* <button onClick= {()=>setNumberString ("")}>clear</button> */}
        
        <button onClick= {()=>setNumberString (numberString.slice(0,-1))}>←</button>
        <button onClick= {()=>setNumberString (numberString + "0" )}>0</button>
        <button onClick= {()=>setNumberString ("")}>E</button>
        </keypadLine1>
        <div></div>&nbsp;
      </header>
    </div>
  );
}

export default App;