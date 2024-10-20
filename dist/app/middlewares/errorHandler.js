"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: "Something went wrong", error: err.message });
    next();
};
exports.default = globalErrorHandler;
