'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var components_1 = require("../../../../components");
var __1 = require("../../..");
var ProductCard = react_1.default.forwardRef(function (props, ref) {
    var label = props.label, title = props.title, subtitle = props.subtitle, price = props.price, compareAtPrice = props.compareAtPrice, actions = props.actions, secondaryAction = props.secondaryAction, handleClick = props.handleClick, image = props.image, _a = props.height, height = _a === void 0 ? 240 : _a, addToCart = props.addToCart, _b = props.enableGradient, enableGradient = _b === void 0 ? false : _b, _c = props.enableOverlay, enableOverlay = _c === void 0 ? false : _c;
    return (react_1.default.createElement("div", { ref: ref, className: (0, react_2.cn)('w-full overflow-hidden bg-background') },
        react_1.default.createElement("div", { className: "min-h-[250px] w-full relative overflow-hidden" },
            react_1.default.createElement(__1.Image, { fullWidth: true, src: image, height: height, alt: title, label: label, handleClick: handleClick, enableGradient: enableGradient, enableOverlay: enableOverlay })),
        react_1.default.createElement("div", { className: "py-2 flex flex-col space-y-4 w-full justify-between items-between" },
            react_1.default.createElement("div", { className: "w-full px-2 flex flex-col space-y-1" },
                react_1.default.createElement(components_1.Typography, { variant: "subtitle2" }, title),
                react_1.default.createElement("div", { className: "flex flex-row space-x-2" },
                    react_1.default.createElement(components_1.Typography, { className: "text-sm text-foreground", variant: "caption" }, price),
                    compareAtPrice && (react_1.default.createElement(components_1.Typography, { className: "line-through", variant: "caption" }, compareAtPrice))),
                subtitle && (react_1.default.createElement(components_1.Typography, { className: "text-sm text-foreground/70", variant: "body2" }, subtitle))),
            addToCart,
            react_1.default.createElement("div", { className: "flex flex-row justify-between" },
                actions,
                secondaryAction))));
});
ProductCard.displayName = 'ProductCard';
exports.default = ProductCard;
