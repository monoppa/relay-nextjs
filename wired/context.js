"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWiredClientContext = exports.createWiredClientContext = exports.getWiredServerContext = exports.createWiredServerContext = void 0;
const WIRED_CONTEXT = Symbol('WIRED');
function createWiredServerContext(value) {
    const context = {};
    Object.defineProperty(context, WIRED_CONTEXT, {
        enumerable: false,
        value: value,
    });
    return context;
}
exports.createWiredServerContext = createWiredServerContext;
function getWiredServerContext(
// Wired context values can be attached to any type.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
context) {
    if (context == null)
        return undefined;
    return context[WIRED_CONTEXT];
}
exports.getWiredServerContext = getWiredServerContext;
function createWiredClientContext(value) {
    const context = {};
    Object.defineProperty(context, WIRED_CONTEXT, {
        enumerable: false,
        value: value,
    });
    return context;
}
exports.createWiredClientContext = createWiredClientContext;
function getWiredClientContext(
// Wired context values can be attached to any type.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
context) {
    if (context == null)
        return undefined;
    return context[WIRED_CONTEXT];
}
exports.getWiredClientContext = getWiredClientContext;
