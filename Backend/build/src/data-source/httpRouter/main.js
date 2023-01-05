"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class ExpressHttpRouter {
    constructor() {
        this.app = (0, express_1.default)();
        this.router = express_1.default.Router();
    }
    Post(url, handler) {
        this.app.post(url, handler);
    }
    Get(url, handler) {
        this.app.post(url, handler);
    }
    Use(handler, url) {
        if (url) {
            this.router.use(url, handler);
        }
        this.router.use(handler);
    }
    ServerSettings() {
        this.Use(express_1.default.json());
    }
    Serve(port) {
        this.ServerSettings();
        this.app.listen(port, () => {
            console.log('FACE DETECTION STARTED SUCCESSFULLY');
        });
    }
}
exports.default = ExpressHttpRouter;
