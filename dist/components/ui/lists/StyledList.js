"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("components");
var StyledList = function (props) {
    var _a = props.loading, loading = _a === void 0 ? false : _a, _b = props.editing, editing = _b === void 0 ? false : _b, resources = props.resources, _c = props.layout, layout = _c === void 0 ? 'list' : _c, _d = props.style, style = _d === void 0 ? 'card' : _d, buttonText = props.buttonText, _e = props.enableBorder, enableBorder = _e === void 0 ? false : _e, _f = props.enableGradient, enableGradient = _f === void 0 ? false : _f, _g = props.enableOverlay, enableOverlay = _g === void 0 ? false : _g, _h = props.emptyTitle, emptyTitle = _h === void 0 ? 'No results found' : _h, _j = props.emptyDescription, emptyDescription = _j === void 0 ? 'Try adjusting your search or filters' : _j, _k = props.emptyIcon, emptyIcon = _k === void 0 ? 'Search' : _k, handleClick = props.handleClick;
    var COMPONENTS = {
        list: {
            card: components_1.CardHoriz,
            avatar: components_1.AvatarHoriz,
            image: components_1.ImageHoriz,
            cover: components_1.CoverHoriz,
            chip: components_1.AvatarChip,
        },
        grid: {
            card: components_1.CardVert,
            avatar: components_1.AvatarVert,
            image: components_1.ImageVert,
            cover: components_1.CoverVert,
            chip: components_1.AvatarChip,
        },
        carousel: {
            card: components_1.CardVert,
            avatar: components_1.AvatarVert,
            image: components_1.ImageVert,
            cover: components_1.CoverVert,
            chip: components_1.AvatarChip,
        },
    };
    var component = COMPONENTS[layout][style] || components_1.CardVert;
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        resources && (react_1.default.createElement(react_1.default.Fragment, null,
            layout == 'list' && (react_1.default.createElement(components_1.ListView, { editing: editing, items: resources, handleClick: handleClick, buttonText: buttonText, component: component, enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay })),
            layout == 'grid' && (react_1.default.createElement(components_1.GridView, { editing: editing, items: resources, handleClick: handleClick, buttonText: buttonText, component: component, enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay })),
            layout == 'carousel' && (react_1.default.createElement(components_1.ListView, { flexDirection: "row", editing: editing, items: resources, handleClick: handleClick, buttonText: buttonText, component: component, enableBorder: enableBorder, enableGradient: enableGradient, enableOverlay: enableOverlay })))),
        !loading && (resources === null || resources === void 0 ? void 0 : resources.length) === 0 && (react_1.default.createElement(components_1.Placeholder, { icon: react_1.default.createElement(components_1.Icon, { name: emptyIcon }), title: emptyTitle, description: emptyDescription }))));
};
exports.default = StyledList;
var sx = {
    root: {
        width: '100%',
    },
};
