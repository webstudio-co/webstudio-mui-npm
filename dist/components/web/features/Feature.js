'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var core_1 = require("../../core");
var frontend_shadcn_1 = require("frontend-shadcn");
var Feature = function (props) {
    var _a = props || {}, icon = _a.icon, title = _a.title, description = _a.description;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-3 justify-center" },
        icon && (react_1.default.createElement(frontend_shadcn_1.Avatar, null,
            react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: "bg-primary" },
                react_1.default.createElement(__1.Icon, { name: icon, color: "text-primary-foreground" })))),
        react_1.default.createElement("div", { className: "flex flex-col justify-center space-y-2" },
            react_1.default.createElement(core_1.Typography, { variant: "subtitle1" }, title),
            react_1.default.createElement(core_1.Typography, { className: "text-muted-foreground", variant: "body1" }, description))));
};
exports.default = Feature;
