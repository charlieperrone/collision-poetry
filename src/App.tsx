import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './textArea';
import DebugWindow from './debugWindow';

const shuffle = (array: string[]) => { 
  return array.sort(() => Math.random() - 0.5); 
}; 

function App() {
  const [state, setState] = useState('');
  const [result, setResult] = useState('');

  const handleClick = useCallback((_e: any) => {
    let curr = state.split(' ');
    curr = shuffle(curr);
    setResult(curr.join(' '));
  }, [state]);

  return (
    <div className="App">
      <TextArea handleChange={setState} state={state} />
      <button onClick={handleClick} name={'collide'}>Collide</button>
      <div>
        {result}
      </div>
      {/* <DebugWindow state={state} /> */}
    </div>
  );
}

export default App;
