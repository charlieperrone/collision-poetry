import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from 'styled-components';

interface TextAreaProps {
    handleChange: any;
    state: string;
}

const TextArea: React.FC<TextAreaProps> = ({handleChange, state}) => {
  return (
    <textarea onChange={e => handleChange(e.target.value)} value={state} id="poem" name="poem" rows={5} cols={33}></textarea>
  );
}

export default TextArea;
