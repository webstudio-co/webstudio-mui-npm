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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var components_1 = require("../../../components");
var react_2 = require("@nextui-org/react");
var MAX_CHARS = 200;
var ExpandableText = function (props) {
    var _a = props || {}, text = _a.text, className = _a.className, _b = _a.variant, variant = _b === void 0 ? 'body1' : _b, _c = _a.maxChars, maxChars = _c === void 0 ? MAX_CHARS : _c;
    var _d = (0, react_1.useState)(false), open = _d[0], setOpen = _d[1];
    return (react_1.default.createElement("div", { className: "flex flex-col" },
        open ? (react_1.default.createElement(components_1.Typography, { variant: variant, className: className }, text)) : (react_1.default.createElement(react_2.ScrollShadow, null,
            react_1.default.createElement(components_1.Typography, { variant: variant, className: className }, text))),
        (text === null || text === void 0 ? void 0 : text.length) > maxChars && (react_1.default.createElement(react_2.Button, { variant: "light", onPress: function () { return setOpen(!open); } }, open ? 'See less' : '... See all'))));
};
exports.default = ExpandableText;
