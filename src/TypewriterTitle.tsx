import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TypewriterList = styled('ol')`
    list-style: none;
    display: flex;
`;

const TypeWriterTitle: React.FC = () => {
    const title = 'collision poetry';
    const [state, setState] = useState<String[]>([]);

    const func = useEffect(() => {
        const array = title.split('');

        let currentIndex = 0;
        const interval = setInterval(() => {
          if (currentIndex <= array.length) {
            setState(array.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
          }
        }, 500); // Adjust the interval for the typing speed
    
        return () => {
          clearInterval(interval); // Clear the interval when the component unmounts
        };

    }, []);

    return (
        <TypewriterList>
            {state.map(l => (
                <li>{l}</li>
            ))}
        </TypewriterList>
    )
}

export default TypeWriterTitle;