import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
// import { sendMsg } from '../serial';

// const { ipcRenderer } = require('electron');

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    // console.log(ipcRenderer.sendSync('sync-msg', 'ping'));

    // ipcRenderer.on('async-reply', (event, arg) => {
    //   console.log(arg);
    // });

    // ipcRenderer.send('async-msg', 'ping');

    // checked
    //   ? ipcRenderer.send('toggle-switch', 'o')
    //   : ipcRenderer.send('toggle-switch', 'f');
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      color="primary"
      name="checkedB"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  );
};

export default ToggleSwitch;
