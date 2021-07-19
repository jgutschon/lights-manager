import { app, BrowserWindow, ipcMain } from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';
// import { setupSerial } from '../src/serial';

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (isDev) {
    window.loadURL(
      `http://${process.env.ELECTRON_WEBPACK_WDS_HOST}:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
    );
    window.webContents.openDevTools({ mode: 'detach' });
  } else {
    window.loadFile(path.resolve(__dirname, 'index.html'));
  }
};

const startApp = async () => {
  await app.whenReady();
  createWindow();

  // ipc messaging
  ipcMain.on('async-msg', (event, arg) => {
    console.log(arg);
    event.reply('async-reply', 'pong');
  });

  ipcMain.on('sync-msg', (event, arg) => {
    console.log(arg);
    event.returnValue = 'pong';
  });

  // setupSerial();
};

startApp();

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
