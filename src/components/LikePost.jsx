// src/components/LikePost.jsx
import React from 'react';
import withCounter from './withCounter';

function LikePost({ counter, handleIncrement }) {
  return (
    <div>
      <button onClick={handleIncrement}>Like Post {counter}</button>
    </div>
  );
}

export default withCounter(LikePost, 1);
