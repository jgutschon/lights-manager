import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';
// import { setupSerial } from '../src/serial';

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDev) {
    window.loadURL('http://localhost:3000');
    window.webContents.openDevTools({ mode: 'detach' });
  } else {
    window.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
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
