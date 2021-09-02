import { exec, execFile, spawn } from 'child_process';
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
  exec(`stty 9600 -F ${port} raw -echo`);
};

const sendMsg = async (msg) => {
  const port = await getSerialPort();
  const cat = spawn('cat', ['-v', port], {
    shell: true,
  });

  exec(`echo -e \'${msg}\' > ${port}`);

  cat.on('exit', (code) => console.log(`cat exited with code: ${code}`));
};

export { setupSerial, sendMsg };
