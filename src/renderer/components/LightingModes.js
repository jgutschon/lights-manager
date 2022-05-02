import React, { useState } from 'react';

const LightingModes = () => {
  const [mode, setMode] = useState('static');

  const handleChange = (event) => {
    setMode();
  };

  return (
    <div>nothing here yet</div>
  )
}

export default LightingModes;
