"use strict";
/**
 * @preserve Copyright 2019-2021 Onno Invernizzi.
 * This source code is subject to terms and conditions.
 * See LICENSE.MD.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module:          Main
 * Responsibility:  Main process
 */
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
function createWindow() {
    return __awaiter(this, void 0, void 0, function* () {
        const preload = path_1.default.join(__dirname, "./Main.js");
        const win = new electron_1.BrowserWindow({
            fullscreen: true,
            webPreferences: {
                nodeIntegration: false,
                contextIsolation: true,
                preload: preload,
                enableRemoteModule: false,
                sandbox: true,
            },
        });
        win.menuBarVisible = false;
        // Uncomment line below to toggle the dev tools when the application starts.
        // win.webContents.toggleDevTools();
        yield win.loadFile(path_1.default.join(__dirname, "index.html"));
    });
}
// when the app is ready electron is in a position to create the window.
electron_1.app.on("ready", () => __awaiter(void 0, void 0, void 0, function* () {
    yield createWindow();
}));
// Closes the app when all windows are closed.
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", () => {
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2VsZWN0cm9uL01haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7O0FBRUg7OztHQUdHO0FBRUgsdUNBQThDO0FBQzlDLGdEQUF3QjtBQUV4QixTQUFlLFlBQVk7O1FBRXZCLE1BQU0sT0FBTyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRWxELE1BQU0sR0FBRyxHQUFHLElBQUksd0JBQWEsQ0FBQztZQUMxQixVQUFVLEVBQUUsSUFBSTtZQUNoQixjQUFjLEVBQUU7Z0JBQ1osZUFBZSxFQUFFLEtBQUs7Z0JBQ3RCLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixrQkFBa0IsRUFBRSxLQUFLO2dCQUN6QixPQUFPLEVBQUUsSUFBSTthQUNoQjtTQUNKLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBRTNCLDRFQUE0RTtRQUM1RSxvQ0FBb0M7UUFFcEMsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztDQUFBO0FBRUQsd0VBQXdFO0FBQ3hFLGNBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRTtJQUN2QixNQUFNLFlBQVksRUFBRSxDQUFDO0FBQ3pCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCw4Q0FBOEM7QUFDOUMsY0FBRyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDN0IsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtRQUMvQixjQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDZDtBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsY0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLElBQUksd0JBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzVDLFlBQVksRUFBRSxDQUFDO0tBQ2xCO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==