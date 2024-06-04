
import React, { useState } from 'react';

const withCounter = (WrappedComponent, incrementValue) => {
  return function WithCounter(props) {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
      setCounter(counter + incrementValue);
    };

    return (
      <WrappedComponent
        counter={counter}
        handleIncrement={handleIncrement}
        {...props}
      />
    );
  };
};

export default withCounter;
