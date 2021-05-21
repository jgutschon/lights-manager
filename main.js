const { app, BrowserWindow } = require("electron");
const { exec, execFile } = require('child_process');
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("index.html");

  // Open DevTools
  // mainWindow.webContents.openDevTools()
}

function setupSerial() {
  const child = execFile('bash', ['./shellScripts/findPort.sh'], (err, stdout, stderr) => {
    if (err) {
      console.error('stderr', stderr);
      throw err;
    }
    const port = stdout;
    exec(`stty 9600 -F ${port} raw -echo`);
    exec(`echo -e 'f' > '${port}'`);
  });
}


startApp = async () => {
  await app.whenReady();
  createWindow();
  setupSerial();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
};

startApp();

// Quit when all windows are closed, except on macOS
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
