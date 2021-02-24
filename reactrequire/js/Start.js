var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "react-dom", "./App/App"], function (require, exports, react_1, react_dom_1, App_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Start = void 0;
    react_1 = __importDefault(react_1);
    App_1 = __importDefault(App_1);
    function Start() {
        var root = document.getElementById("root");
        react_dom_1.render(react_1.default.createElement(App_1.default, null), root);
    }
    exports.Start = Start;
});
//# sourceMappingURL=Start.js.map