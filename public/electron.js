const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");

require("update-electron-app")({
  repo: "Zeonlabs/gaushala-software.git",
});

//start server
// require("./server/dist/server.js");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    // width: 1280,
    // height: 720,
    // webPreferences: { nodeIntegration: true }
  });
  mainWindow.setMenuBarVisibility(false);
  mainWindow.maximize();
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

app.allowRendererProcessReuse = true;
app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});