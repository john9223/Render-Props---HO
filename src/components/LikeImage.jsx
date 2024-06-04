// src/components/LikeImage.jsx
import React from 'react';
import withCounter from './withCounter';

function LikeImage({ counter, handleIncrement }) {
  return (
    <div>
      <button onClick={handleIncrement}>Like Image {counter}</button>
    </div>
  );
}

export default withCounter(LikeImage, 1);
