import { ipcRenderer } from 'electron';
import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);

    event.target.checked
      ? ipcRenderer.send('toggle-switch', 'o')
      : ipcRenderer.send('toggle-switch', 'f');
  };

  return (
    <Box>
      <Switch
        checked={checked}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </Box>
  );
};

export default ToggleSwitch;
