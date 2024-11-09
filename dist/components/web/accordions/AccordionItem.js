'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var core_1 = require("../../core");
var AccordionItemComponent = function (props) {
    var title = props.title, subtitle = props.subtitle;
    return (react_1.default.createElement(frontend_shadcn_1.Accordion, { type: "single", collapsible: true, className: "w-full" },
        react_1.default.createElement(frontend_shadcn_1.AccordionItem, { value: "item hover:underline-none hover:bg-muted/50" },
            react_1.default.createElement(frontend_shadcn_1.AccordionTrigger, null,
                react_1.default.createElement(core_1.Typography, { variant: "subtitle1" }, title)),
            react_1.default.createElement(frontend_shadcn_1.AccordionContent, null,
                react_1.default.createElement(core_1.Typography, { variant: "body1", className: "text-muted-foreground" }, subtitle)))));
};
exports.default = AccordionItemComponent;
