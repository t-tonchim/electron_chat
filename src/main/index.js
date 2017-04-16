import { app } from "electron";
import createWindow from "./createWindow";

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if(process.platform !== "darwin"){
    app.quit();
  }
});

app.on("active", (_e, hasVisibleWindows) => {
  if(!hasVisisbleWindows){
    createWindow();
  }
});
