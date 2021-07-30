"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelaySerializedState = exports.withRelay = void 0;
var component_1 = require("./wired/component");
Object.defineProperty(exports, "withRelay", { enumerable: true, get: function () { return component_1.Wire; } });
var serialized_state_1 = require("./wired/serialized_state");
Object.defineProperty(exports, "getRelaySerializedState", { enumerable: true, get: function () { return serialized_state_1.getWiredSerializedState; } });
