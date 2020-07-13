import React, { useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => {

  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  if(visible) {
    return (
      <div>
        <button
          onClick={() => setValue((v) => v + 1)}>+</button>
          <button
          onClick={() => setVisible((false))}>Hide!</button>
          <Notification />
      </div>
    );

  }else {
    return <button
    onClick={() => setVisible((true))}>Show!</button>
  }

}

const HookCounter = ({ value }) => {

  useEffect(() => console.log('mount'), []); //componentDidMount
  useEffect(() => console.log('update')); // componentDidUpdate
  useEffect(() => () => console.log('unmount'), []);

    
return <p>{ value }</p>
}

const Notification = () => {

  const [ visible, setVisible ] = useState(true);
  useEffect(() => {
   const timeout =  setTimeout(() => setVisible(false), 2500);
   return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      { visible && <p>Hello!</p>}
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

