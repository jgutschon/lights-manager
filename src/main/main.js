import { app, BrowserWindow, ipcMain } from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';
import { setupSerial, sendMsg } from '../common/serial';

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
  setupSerial();

  ipcMain.on('toggle-switch', (event, arg) => {
    sendMsg(arg);
  });
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
