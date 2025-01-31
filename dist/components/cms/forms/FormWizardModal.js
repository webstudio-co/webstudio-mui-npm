'use client';
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FormWizard_1 = __importDefault(require("./FormWizard"));
var __1 = require("../..");
var FormWizardModal = function (props) {
    var _a = props || {}, open = _a.open, handleClose = _a.handleClose;
    return (react_1.default.createElement(__1.Drawer, { open: open, handleClose: handleClose, maxWidth: "xl" },
        react_1.default.createElement(FormWizard_1.default, __assign({}, props))));
};
exports.default = FormWizardModal;
