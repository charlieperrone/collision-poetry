import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from 'styled-components';

const StyledTextArea = styled('textarea')`
    border: 1px solid #D9D9D9;
    display: block;
    height: 100%;
`;

interface TextAreaProps {
    handleChange: any;
    state: string;
}

const TextArea: React.FC<TextAreaProps> = ({handleChange, state}) => {
  return (
    <StyledTextArea onChange={e => handleChange(e.target.value)} value={state} id="poem" name="poem" />
  );
}

export default TextArea;
