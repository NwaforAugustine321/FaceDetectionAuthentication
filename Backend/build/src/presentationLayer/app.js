"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Server {
    constructor(app) {
        this.app = app;
    }
    Post(url, handler) {
        this.app.Post(url, handler);
    }
    Get(url, handler) {
        this.app.Get(url, handler);
    }
    Use(handler, url) {
        if (url) {
            this.app.Use(handler, url);
        }
        this.app.Use(handler);
    }
    Serve(port) {
        this.app.Serve(port);
        return this;
    }
}
exports.default = Server;
