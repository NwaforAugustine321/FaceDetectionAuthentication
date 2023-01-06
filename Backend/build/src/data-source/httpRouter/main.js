"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class ExpressHttpRouter {
    constructor() {
        this.corsOptions = {
            origin: ['http://localhost:3000'],
            methods: ['GET', 'POST', 'PATCH', 'OPTIONS', 'PUT', 'DELETE'],
            optionsSuccessStatus: 200,
        };
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
            this.app.use(url, handler);
        }
        this.app.use(handler);
    }
    ServerSettings() {
        this.Use(express_1.default.json());
        this.Use((0, cors_1.default)(this.corsOptions));
        this.app.options('*', (0, cors_1.default)(this.corsOptions));
    }
    Serve(port) {
        this.ServerSettings();
        this.app.listen(port, () => {
            console.log('FACE DETECTION STARTED SUCCESSFULLY');
        });
    }
}
exports.default = ExpressHttpRouter;
