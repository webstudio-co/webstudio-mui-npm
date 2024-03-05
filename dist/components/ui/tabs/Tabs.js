"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var material_2 = require("@mui/material");
var TabItem_1 = __importDefault(require("./TabItem"));
var Tabs = function (props) {
    var _a = (0, react_1.useState)(0), currentTab = _a[0], setCurrentTab = _a[1];
    var title = props.title, _b = props.items, items = _b === void 0 ? [] : _b, _c = props.fullWidth, fullWidth = _c === void 0 ? false : _c;
    var handleChange = function (event, newValue) {
        setCurrentTab(newValue);
    };
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: sx.root },
        react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: 'space-between', spacing: 1 },
            react_1.default.createElement(material_2.Typography, { variant: "h6", sx: sx.title, color: "textPrimary" }, title)),
        react_1.default.createElement(material_2.Tabs, { centered: true, variant: fullWidth ? "fullWidth" : "standard", value: currentTab, onChange: handleChange, color: "secondary", sx: sx.root }, items === null || items === void 0 ? void 0 : items.map(function (item, i) { return (react_1.default.createElement(material_2.Tab, { label: item.label, value: i })); })), items === null || items === void 0 ? void 0 :
        items.map(function (item, i) { return (react_1.default.createElement(TabItem_1.default, { key: i, active: i == currentTab, title: item === null || item === void 0 ? void 0 : item.title, description: item === null || item === void 0 ? void 0 : item.description, image: item === null || item === void 0 ? void 0 : item.image })); }),
        (items === null || items === void 0 ? void 0 : items.length) === 0 && (react_1.default.createElement(components_1.Placeholder, { icon: react_1.default.createElement(components_1.Icon, { name: "Search" }), title: "No content", description: "Your content will appear here." }))));
};
exports.default = Tabs;
var sx = {
    root: {
        width: '100%',
    },
    title: {
        width: '100%',
        textAlign: 'center',
        mb: 2
    },
    accordionSummary: {},
};
