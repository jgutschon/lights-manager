import { exec, execFile } from 'child_process';
import path from 'path';

const getSerialPort = () => {
  return new Promise((resolve, reject) => {
    execFile(
      path.resolve(__dirname, '../shell/findPort.sh'),
      (err, stdout, stderr) => {
        if (err) {
          console.error('stderr', stderr);
          return reject(err);
        }

        return resolve(stdout);
      }
    );
  });
};

const setupSerial = async () => {
  const port = await getSerialPort();
  exec(`stty 9600 -F ${port} raw -echo && cat ${port}`);
};

const sendMsg = async (msg) => {
  const port = await getSerialPort();
  exec(`echo ${msg} > ${port}`);
};

export { setupSerial, sendMsg };
