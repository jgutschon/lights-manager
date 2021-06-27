const { exec, execFile } = require('child_process');

function getSerialPort() {
  const child = execFile('bash', ['./shell/findPort.sh'], (err, stdout, stderr) => {
    if (err) {
      console.error('stderr', stderr);
      throw err;
    }
    return stdout;
  });
};

function setupSerial() {
  const port = getSerialPort();
  exec(`stty 9600 -F ${port} raw -echo && cat ${port}`);
};

module.exports = { getSerialPort, setupSerial };