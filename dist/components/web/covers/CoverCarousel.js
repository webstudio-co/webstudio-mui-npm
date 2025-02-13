'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var CoverCarousel = function (props) {
    var _a = props.items, items = _a === void 0 ? [] : _a, _b = props.enableOverlay, enableOverlay = _b === void 0 ? false : _b, _c = props.enableGradient, enableGradient = _c === void 0 ? false : _c, _d = props.enableAutoPlay, enableAutoPlay = _d === void 0 ? false : _d, _e = props.alignItems, alignItems = _e === void 0 ? 'items-center' : _e;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(__1.Swipeable, { enableArrows: true, enableAutoPlay: enableAutoPlay }, items === null || items === void 0 ? void 0 : items.map(function (item, index) { return (react_1.default.createElement(__1.Cover, { key: index, title: item === null || item === void 0 ? void 0 : item.title, subtitle: item === null || item === void 0 ? void 0 : item.subtitle, image: item === null || item === void 0 ? void 0 : item.image, buttonText: item === null || item === void 0 ? void 0 : item.buttonText, path: item === null || item === void 0 ? void 0 : item.path, enableOverlay: enableOverlay, enableGradient: enableGradient, alignItems: alignItems })); })),
        (items === null || items === void 0 ? void 0 : items.length) === 0 && (react_1.default.createElement(__1.Empty, { icon: "ri-carousel-view", title: "No cover images", description: "Cover images will appear here." }))));
};
exports.default = CoverCarousel;
