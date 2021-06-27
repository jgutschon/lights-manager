import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import { sendMsg } from '../serial';

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    checked ? sendMsg('o') : sendMsg('f');
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
