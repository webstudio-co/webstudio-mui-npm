'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typography = void 0;
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var Typography = function (_a) {
    var variant = _a.variant, _b = _a.textAlign, textAlign = _b === void 0 ? 'left' : _b, className = _a.className, children = _a.children;
    var variantClasses = {
        h1: 'text-6xl font-semibold tracking-tight',
        h2: 'text-5xl font-semibold tracking-tight',
        h3: 'text-4xl font-semibold tracking-tight',
        h4: 'text-3xl font-semibold tracking-tight',
        h5: 'text-2xl font-medium tracking-tight',
        h6: 'text-1xl font-medium tracking-tight',
        subtitle1: 'text-xl font-normal tracking-tight leading-8',
        subtitle2: 'text-lg leading-8',
        button: 'text-base',
        body1: 'text-md leading-normal',
        body2: 'text-sm leading-normal',
        caption: 'text-xs',
        overline: 'text-xs uppercase tracking-widest',
    };
    var fontFamily = {
        h1: 'font-header',
        h2: 'font-header',
        h3: 'font-header',
        h4: 'font-header',
        h5: 'font-header',
        h6: 'font-header',
        subtitle1: 'font-header',
        subtitle2: 'font-header',
        button: 'font-body',
        body1: 'font-body',
        body2: 'font-body',
        caption: 'font-body',
        overline: 'font-body',
    };
    var alignmentClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('text-foreground', fontFamily[variant], variantClasses[variant], alignmentClasses[textAlign], className) }, children));
};
exports.Typography = Typography;
