import { exec, execFile } from 'child_process';

const getSerialPort = () => {
  const child = execFile(
    'bash',
    ['./shell/findPort.sh'],
    (err, stdout, stderr) => {
      if (err) {
        console.error('stderr', stderr);
        throw err;
      }
      return stdout;
    }
  );
};

const setupSerial = () => {
  const port = getSerialPort();
  exec(`stty 9600 -F ${port} raw -echo && cat ${port}`);
};

const sendMsg = (msg) => {
  const port = getSerialPort();
  exec(`echo ${msg} > ${port}`);
};

export { getSerialPort, setupSerial, sendMsg };
