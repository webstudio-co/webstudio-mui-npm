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
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../components");
var __1 = require("../..");
var ProductCollectionCard = react_1.default.forwardRef(function (props, ref) {
    var label = props.label, primary = props.primary, handleClick = props.handleClick, image = props.image, disableBorder = props.disableBorder, _a = props.slots, slots = _a === void 0 ? {
        item: {},
        image: {},
    } : _a;
    return (react_1.default.createElement("div", { ref: ref, className: (0, react_2.cn)(!disableBorder && 'border border-divider hover:shadow-md', 'w-full overflow-hidden rounded-lg transition-shadow duration-300 bg-background') },
        react_1.default.createElement("div", { className: "min-h-[240px] w-full relative overflow-hidden" },
            react_1.default.createElement(__1.Image, __assign({ src: image, height: 240, alt: primary, label: label, aspectRatio: 4 / 3, handleClick: handleClick, disableBorderRadius: !disableBorder }, slots.image))),
        react_1.default.createElement("div", { className: "px-4 pt-2 pb-4 w-full" },
            react_1.default.createElement(components_1.Typography, { variant: "subtitle1" }, primary))));
});
ProductCollectionCard.displayName = 'ProductCollectionCard';
exports.default = ProductCollectionCard;
