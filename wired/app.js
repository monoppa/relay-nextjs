"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitialPreloadedQuery = exports.getWiredProps = void 0;
const hooks_1 = require("react-relay/hooks");
const context_1 = require("./context");
const serialized_state_1 = require("./serialized_state");
function getWiredProps(pageProps, initialPreloadedQuery) {
    var _a, _b;
    const serverContext = context_1.getWiredServerContext(pageProps.__wired__server__context);
    const clientContext = context_1.getWiredClientContext(pageProps.__wired__client__context);
    const CSN = clientContext != null;
    const preloadedQuery = (_b = (_a = clientContext === null || clientContext === void 0 ? void 0 : clientContext.preloadedQuery) !== null && _a !== void 0 ? _a : serverContext === null || serverContext === void 0 ? void 0 : serverContext.preloadedQuery) !== null && _b !== void 0 ? _b : initialPreloadedQuery;
    return { CSN, preloadedQuery };
}
exports.getWiredProps = getWiredProps;
function getInitialPreloadedQuery(opts) {
    if (typeof window === 'undefined')
        return null;
    const serializedState = serialized_state_1.getWiredSerializedState();
    if (serializedState == null || serializedState.query == null)
        return null;
    const env = opts.createClientEnvironment();
    return hooks_1.loadQuery(env, serializedState.query, serializedState.variables, {
        fetchPolicy: 'store-or-network',
    });
}
exports.getInitialPreloadedQuery = getInitialPreloadedQuery;
