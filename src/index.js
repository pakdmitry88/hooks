import React, { useState } from 'react';
import ReactDOM from 'react-dom';



const App = () => {
  return (
  <div>
    <HookSwitcher/>
  </div>
  );
}


const HookSwitcher = () => {

  const [color, setColor] = useState('grey');
  const [ fontSize, setFontSize ] = useState(14);

  return (
    <div style={{padding: '10px', 
                 backgroundColor: color,
                fontSize: fontSize}}>
                HELLO WORLD!
      <button onClick={() => setColor('grey')}>Dark</button>
      <button onClick={() => setColor('white')}>Ligth</button>
      <button onClick={() => setFontSize((size) => size + 10)}>Font size</button>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

