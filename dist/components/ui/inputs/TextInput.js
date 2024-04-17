"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var styles_1 = require("./styles");
var hooks_1 = require("../../../hooks");
var use_debounce_1 = require("use-debounce");
var TextInput = function (props) {
    var label = props.label, type = props.type, name = props.name, margin = props.margin, _a = props.value, value = _a === void 0 ? '' : _a, multiline = props.multiline, handleChange = props.handleChange, rows = props.rows, placeholder = props.placeholder, disabled = props.disabled, errors = props.errors, _b = props.direction, direction = _b === void 0 ? 'column' : _b, _c = props.styles, styles = _c === void 0 ? {} : _c;
    var _d = (0, react_1.useState)(value), text = _d[0], setText = _d[1];
    var debouncedValue = (0, use_debounce_1.useDebounce)(text, 500)[0];
    var _e = (0, hooks_1.useError)({
        errors: errors,
        name: name,
    }), error = _e.error, clearError = _e.clearError;
    var handleInputChange = function (e) {
        if (error)
            clearError();
        setText(e.target.value);
    };
    var debouncedChanged = (0, use_debounce_1.useDebounce)(handleInputChange, 3000)[0];
    (0, react_1.useEffect)(function () {
        if (debouncedValue !== value) {
            handleChange({
                target: {
                    name: name,
                    value: debouncedValue,
                },
            });
        }
    }, [debouncedValue]);
    (0, react_1.useEffect)(function () {
        if (value !== text) {
            setText(value);
        }
    }, [value]);
    return (react_1.default.createElement(material_1.FormControl, { fullWidth: true },
        react_1.default.createElement(material_1.Stack, { sx: __assign(__assign({}, styles_1.sx.stack), (direction == 'row' && !multiline && styles_1.sx.stackVertical)), direction: direction, spacing: 0.5 },
            label && (react_1.default.createElement(material_1.Typography, { sx: styles_1.sx.label, variant: "caption", color: "text.secondary" }, label)),
            react_1.default.createElement(material_1.InputBase, { rows: rows, error: error ? true : false, sx: __assign(__assign(__assign({}, styles_1.sx.inputBase), ((error && styles_1.sx.inputError) || {})), styles), multiline: multiline, autoComplete: "off", fullWidth: true, type: type, name: name, margin: margin, disabled: disabled, placeholder: placeholder, onChange: debouncedChanged, value: text })),
        react_1.default.createElement(components_1.ErrorText, { error: error })));
};
exports.default = TextInput;
