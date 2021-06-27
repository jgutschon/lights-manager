const exec = require('child_process');
const arduino = require('./arduino');

const next = document.getElementById('next-lights');
next.addEventListener('click', (event) => {
  exec(`echo 'n' > ${arduino.getSerialPort()}`);
  console.log('next');
});

const prev = document.getElementById('prev-lights');
prev.addEventListener('click', (event) => {
  exec(`echo 'p' > ${arduino.getSerialPort()}`);
  console.log('previous');
});
