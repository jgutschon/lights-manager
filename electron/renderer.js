const exec = require('child_process');
const serial = require('./serial');

const next = document.getElementById('next-lights');
next.addEventListener('click', (event) => {
  exec(`echo 'n' > ${serial.getSerialPort()}`);
  console.log('next');
});

const prev = document.getElementById('prev-lights');
prev.addEventListener('click', (event) => {
  exec(`echo 'p' > ${serial.getSerialPort()}`);
  console.log('previous');
});
