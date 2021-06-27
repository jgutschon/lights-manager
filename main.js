const { app, BrowserWindow } = require('electron');
const path = require('path');
const serial = require('./serial');

createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  window.loadFile('index.html');

  // Open DevTools
  // window.webContents.openDevTools();
};

startApp = async () => {
  await app.whenReady();
  createWindow();
  serial.setupSerial();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
};

startApp();

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
