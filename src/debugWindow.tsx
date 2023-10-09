import React from 'react';
import './App.css';
import { styled } from 'styled-components';


const StyledWindow = styled('div')`
    color: red;
`

const DebugWindow: React.FC<{state: string}> = (props) => {
  return (
    <StyledWindow>
        {props.state}
    </StyledWindow>
  );
}

export default DebugWindow;
