
import React, { useState } from 'react';

const Counter = ({ render }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return render(counter, handleIncrement);
};

export default Counter;
