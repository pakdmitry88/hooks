import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => {
  return (
  <div>
    <MyContext.Provider value='Hello World!!!'>
    <Child/>
      </MyContext.Provider>
  </div>
  );
}


const Child = () =>{

  const value  = useContext(MyContext)
  return (
  <p>{value}</p>
  )
}

//   return (
//     <div style={{padding: '10px', 
//                  backgroundColor: color,
//                 fontSize: fontSize}}>
//                 HELLO WORLD! Now font Size {fontSize}
//       <button onClick={() => setColor('grey')}>Dark</button>
//       <button onClick={() => setColor('white')}>Ligth</button>
//       <button onClick={() => setFontSize((size) => size + 10)}>Font size</button>
//     </div>
//   )
// }


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

