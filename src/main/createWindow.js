import { BrowserWindow } from "electron";

let win;

function createWindow(){
  win = new BrowserWindow();
  win.loadURL(`file://${__dirname}/../../index.html`);
  win.on("clase", () => {
    win = null;
  });
}

export default createWindow;
