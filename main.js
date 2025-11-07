const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    icon: path.join(__dirname, 'vite.svg'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // No preload script is needed as communication happens over HTTP/WS
    },
  });

  mainWindow.loadFile('index.html');
  
  // Uncomment to open DevTools
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
