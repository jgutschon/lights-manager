const { app, BrowserWindow } = require("electron");
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

startApp = async () => {
  await app.whenReady();
  createWindow();

  app.on("activate", function () {
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
