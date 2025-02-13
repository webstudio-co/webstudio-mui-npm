'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var SimplePage = function (props) {
    var _a = props || {}, title = _a.title, subtitle = _a.subtitle, body = _a.body, _b = _a.html, html = _b === void 0 ? false : _b, _c = _a.disablePadding, disablePadding = _c === void 0 ? false : _c;
    return (react_1.default.createElement("div", { className: "w-full flex justify-center items-start ".concat(disablePadding ? '' : 'p-6') },
        react_1.default.createElement("div", { className: "w-full max-w-3xl space-y-4" },
            react_1.default.createElement(components_1.Typography, { variant: "h2", className: "text-foreground text-center" }, title),
            react_1.default.createElement(components_1.Typography, { variant: "caption", className: "block text-center" }, subtitle),
            html ? (react_1.default.createElement("div", { className: "prose", dangerouslySetInnerHTML: { __html: body } })) : (react_1.default.createElement(components_1.Typography, { variant: "body1", className: "whitespace-pre-line" }, body)))));
};
exports.default = SimplePage;
