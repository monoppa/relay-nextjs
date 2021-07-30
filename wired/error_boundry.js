"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WiredErrorBoundry = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const error_1 = __importDefault(require("next/error"));
const react_1 = require("react");
class WiredErrorBoundry extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        const ErrorComponent = this.props.ErrorComponent;
        if (this.state.hasError) {
            return ErrorComponent ? (jsx_runtime_1.jsx(ErrorComponent, { statusCode: 500 }, void 0)) : (jsx_runtime_1.jsx(error_1.default, { statusCode: 500 }, void 0));
        }
        else {
            return this.props.children;
        }
    }
}
exports.WiredErrorBoundry = WiredErrorBoundry;
