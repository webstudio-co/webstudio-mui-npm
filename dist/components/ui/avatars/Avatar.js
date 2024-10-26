'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var frontend_shadcn_2 = require("frontend-shadcn");
function Avatar(_a) {
    var src = _a.src, label = _a.label, _b = _a.variant, variant = _b === void 0 ? 'rounded' : _b, _c = _a.size, size = _c === void 0 ? 40 : _c, className = _a.className;
    var avatarClasses = (0, frontend_shadcn_2.cn)(variant === 'circular' ? 'rounded-full' : 'rounded-lg');
    return (react_1.default.createElement(frontend_shadcn_1.Avatar, { className: (0, frontend_shadcn_2.cn)(avatarClasses, className), style: {
            width: size,
            height: size,
        } },
        react_1.default.createElement(frontend_shadcn_1.AvatarImage, { src: src, alt: "Avatar", className: "object-cover" }),
        react_1.default.createElement(frontend_shadcn_1.AvatarFallback, { className: (0, frontend_shadcn_2.cn)(avatarClasses, 'bg-primary text-primary-foreground') }, label ? label.slice(0, 2) : null)));
}
exports.default = Avatar;
