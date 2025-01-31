'use client';
"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var frontend_shadcn_1 = require("frontend-shadcn");
var react_3 = require("@nextui-org/react");
function ArrayInput(props) {
    var _a = props || {}, errors = _a.errors, label = _a.label, name = _a.name, placeholder = _a.placeholder, handleChange = _a.handleChange, _b = _a.direction, direction = _b === void 0 ? 'column' : _b, info = _a.info, _c = _a.value, value = _c === void 0 ? [] : _c;
    var _d = (0, hooks_1.useError)({ errors: errors, name: name }), error = _d.error, clearError = _d.clearError;
    var _e = (0, react_1.useState)(''), inputValue = _e[0], setInputValue = _e[1];
    var handleInputChange = function (newValues) {
        if (error)
            clearError();
        handleChange({
            target: {
                name: name,
                value: newValues,
            },
        });
    };
    var addTag = function (tag) {
        var trimmedTag = tag.trim();
        if (trimmedTag && !value.includes(trimmedTag)) {
            handleInputChange(__spreadArray(__spreadArray([], value, true), [trimmedTag], false));
        }
        setInputValue('');
    };
    var removeTag = function (tagToRemove) {
        handleInputChange(value.filter(function (tag) { return tag !== tagToRemove; }));
    };
    var handleKeyDown = function (e) {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTag(inputValue);
        }
        else if (e.key === 'Backspace' && inputValue === '' && value.length > 0) {
            e.preventDefault();
            var newValues = __spreadArray([], value, true);
            newValues.pop();
            handleInputChange(newValues);
        }
    };
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('flex w-full space-y-2', direction === 'row' ? 'flex-row items-center' : 'flex-col') },
        react_1.default.createElement("div", { className: "relative w-full" },
            react_1.default.createElement("div", { className: (0, react_2.cn)('bg-content2 hover:bg-content3/50 px-3 py-2 flex flex-col space-y-0 rounded-xl', error && 'border-destructive') },
                react_1.default.createElement(components_1.Typography, { variant: "overline" }, label),
                react_1.default.createElement("div", { className: " flex flex-wrap gap-2" },
                    Array.isArray(value) &&
                        (value === null || value === void 0 ? void 0 : value.map(function (tag) { return (react_1.default.createElement(react_3.Chip, { key: tag, onClose: function () { return removeTag(tag); } }, tag)); })),
                    react_1.default.createElement(frontend_shadcn_1.Input, { type: "text", placeholder: placeholder || "Add ".concat(label === null || label === void 0 ? void 0 : label.toLowerCase()), value: inputValue, onChange: function (e) { return setInputValue(e.target.value); }, onKeyDown: handleKeyDown, onBlur: function () { return addTag(inputValue); }, className: "text-foreground flex-1 px-0 py-0 text-sm border-0 focus-visible:ring-0 focus-visible:ring-offset-0" }))),
            react_1.default.createElement(components_1.ErrorText, { error: error }))));
}
exports.default = ArrayInput;
