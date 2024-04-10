"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var FeaturedCard_1 = __importDefault(require("./FeaturedCard"));
var Featured = function (props) {
    var _a = props || {}, _b = _a.items, items = _b === void 0 ? [] : _b, enableBorder = _a.enableBorder, enableGradient = _a.enableGradient, enableOverlay = _a.enableOverlay;
    return (react_1.default.createElement(material_1.Box, null,
        react_1.default.createElement(material_1.Stack, { spacing: 6 }, items === null || items === void 0 ? void 0 : items.map(function (item, i) { return (react_1.default.createElement(FeaturedCard_1.default, { title: item === null || item === void 0 ? void 0 : item.title, description: item === null || item === void 0 ? void 0 : item.description, image: item === null || item === void 0 ? void 0 : item.image, buttonText: item === null || item === void 0 ? void 0 : item.buttonText, href: item === null || item === void 0 ? void 0 : item.url, flexDirection: i % 2 === 0 ? 'row' : 'row-reverse', enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay })); })),
        (items === null || items === void 0 ? void 0 : items.length) == 0 && (react_1.default.createElement(components_1.Placeholder, { icon: "LayoutList", title: "No featured content.", description: "Your featured content will appear here." }))));
};
exports.default = Featured;
var sx = {
    title: {
        width: '100%',
        textAlign: 'center',
    },
    item: {
        p: 2,
    },
};
