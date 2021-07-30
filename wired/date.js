"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withHydrateDatetime = void 0;
const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,}|)Z$/;
function withHydrateDatetime(_key, value) {
    // `new Date` accepts things that aren't necessarily valid JSON timestamps,
    // for example `new Date('80')` works. Validating that we're actually
    // converting a JSON timestamp avoids unintentional coercion.
    if (typeof value === 'string' && dateFormat.test(value)) {
        return new Date(value);
    }
    return value;
}
exports.withHydrateDatetime = withHydrateDatetime;
