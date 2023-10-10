import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './textArea';
import DebugWindow from './debugWindow';
import styled from 'styled-components';

const Container = styled('div')`
`;
 
const FlexParent = styled('div')`
  display: flex;
  margin: auto;
  width: 50%;

  > div {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 95vh;
  }

  > div:first-child {
    margin-right: 1em;
  }
`;

const ResultWindow = styled('div')`
  border: 1px solid #D9D9D9;
  flex-grow: 1;
`;

const StyledButton = styled('button')`
  border: none;
  background-color: #D9D9D9;
  margin-top: 1em;
`

const shuffle = (array: string[]) => { 
  return array.sort(() => Math.random() - 0.5); 
}; 

function App() {
  const [state, setState] = useState('');
  const [result, setResult] = useState('');

  const handleClick = useCallback((_e: any) => {
    const curr = state.split(' ');
    setResult(shuffle(curr).join(' '));
  }, [state]);

  return (
    <Container>
      <FlexParent>
        <div>
          <h4>Input</h4>
          <TextArea handleChange={setState} state={state} />
          <StyledButton onClick={handleClick} name={'collide'}>Collide</StyledButton>
        </div>
        <div>
          <h4>Output</h4>
          <ResultWindow>
            {result}
          </ResultWindow>
        </div>
        {/* <DebugWindow state={state} /> */}
      </FlexParent>
    </Container>
  );
}

export default App;
