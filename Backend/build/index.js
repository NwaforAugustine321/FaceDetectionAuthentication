"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("./src/data-source/httpRouter/main"));
const app_1 = __importDefault(require("./src/presentationLayer/app"));
const PORT = 4000;
const app = new app_1.default(new main_1.default()).Serve(PORT);
app.Post('/', (req, res) => {
    res.send('ok');
});
