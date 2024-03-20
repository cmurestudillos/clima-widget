const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
let mainWindow;
 
function createWindow() {
 
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 600,
        height: 840,
        icon: path.join(__dirname, '/../public/favicon.ico'),
    });
 
    mainWindow.loadURL(
        process.env.ELECTRON_START_URL || url.format({
            pathname: path.join(__dirname, '/../build/index.html'),
            protocol: 'file:',
            slashes: true
        })
    );
     
    // Open the DevTools.
    // mainWindow.webContents.openDevTools();
}
 
app.on('ready', createWindow);
 
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
 
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
 