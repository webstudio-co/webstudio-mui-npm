'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var react_3 = require("@nextui-org/react");
var SliderInput = function (props) {
    var _a = props.value, value = _a === void 0 ? [] : _a, name = props.name, handleChange = props.handleChange, _b = props.min, min = _b === void 0 ? 0 : _b, _c = props.max, max = _c === void 0 ? 10 : _c, _d = props.stepSize, stepSize = _d === void 0 ? 1 : _d, className = props.className;
    return (react_1.default.createElement(react_2.Slider, { name: name, defaultValue: value, onChangeEnd: handleChange, step: stepSize, minValue: min, maxValue: max, value: value, className: (0, react_3.cn)('w-full', className) }));
};
exports.default = SliderInput;
