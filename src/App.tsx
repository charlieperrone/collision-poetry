import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextArea from './textArea';
import DebugWindow from './debugWindow';
import styled from 'styled-components';
import copyIcon from'./copy.png';

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

  p {
    margin: 0;
  }
`;

const StyledButton = styled('button')`
  border: none;
  background-color: #D9D9D9;
  margin-top: 1em;
`

const StyledIcon = styled('img')`
  width: 1em;
  height: 1em;
`;

const Header = styled('h4')`
  margin: 1em 0;
  font-weight: normal;
`

const shuffle = (array: string[]) => { 
  return array.sort(() => Math.random() - 0.5); 
}; 

function App() {
  const [state, setState] = useState('');
  const [result, setResult] = useState<String[]>([]);

  const handleClick = useCallback((_e: any) => {
    const lines = state.split('\n');
    const result = lines.map(l => shuffle(l.split(' ')).join(' '));

    setResult(result);
  }, [state]);

  const copy = useCallback(() => {
    const newClip = document.querySelector('#result')?.innerHTML || '';
    navigator.clipboard.writeText(newClip).then(
      () => {
        console.log('success: set result to clipboard.');
      },
      () => {
        console.log('failed: could not set result to clipboard');
      },
    );
  }, []);

  return (
    <Container>
      <FlexParent>
        <div>
          <Header>Input</Header>
          <TextArea handleChange={setState} state={state} />
          <StyledButton onClick={handleClick} name={'collide'}>Collide</StyledButton>
        </div>
        <div>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Header>Output</Header>
            <StyledIcon src={copyIcon} onClick={copy} />
          </div>
          <ResultWindow id="result">
            {result.map(r =>
              <p key={r.toString()}>{r}</p>
            )}
          </ResultWindow>
        </div>
        {/* <DebugWindow state={state} /> */}
      </FlexParent>
    </Container>
  );
}

export default App;
