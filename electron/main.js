const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

// Determina si estamos en desarrollo
const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 840,
    icon: path.join(__dirname, '../src/assets/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    resizable: true,
    frame: true,
  });

  // En desarrollo: carga desde el servidor de Vite
  // En producción: carga desde los archivos construidos
  if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
    // Abre DevTools en desarrollo
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../build/index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

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
