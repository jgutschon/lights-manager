import { exec, execFile } from 'child_process';
import path from 'path';

const getSerialPort = () => {
  const child = execFile(
    path.resolve(__dirname, '../shell/findPort.sh'),
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
  console.log('port:', port);
  console.log('msg:', msg);
  exec(`echo ${msg} > ${port}`);
};

export { setupSerial, sendMsg };
