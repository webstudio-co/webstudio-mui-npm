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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var context_1 = require("../../../context");
var material_1 = require("@mui/material");
var __1 = require("../..");
var helpers_1 = require("../../../helpers");
var router_1 = require("next/router");
var __2 = require("../..");
var CardList = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, actions = _a.actions, resource = _a.resource, _b = _a.displayFields, displayFields = _b === void 0 ? [] : _b, href = _a.href, _c = _a.height, height = _c === void 0 ? 180 : _c, handleClick = _a.handleClick, _d = _a.objectFit, objectFit = _d === void 0 ? 'cover' : _d, _e = _a.enableGradient, enableGradient = _e === void 0 ? false : _e, _f = _a.enableOverlay, enableOverlay = _f === void 0 ? false : _f, _g = _a.enableComments, enableComments = _g === void 0 ? false : _g, _h = _a.enableFavorites, enableFavorites = _h === void 0 ? false : _h, _j = _a.enableRatings, enableRatings = _j === void 0 ? false : _j;
    var router = (0, router_1.useRouter)();
    var _k = resource || {}, label = _k.label, title = _k.title, image = _k.image;
    var handleItemClick = function () {
        if (handleClick) {
            return handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { sx: sx.container, spacing: 1, flexDirection: { xs: 'column', sm: 'row' } },
            react_1.default.createElement(material_1.Box, { sx: sx.image },
                react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleItemClick },
                    react_1.default.createElement(__1.Image, { label: label, src: image === null || image === void 0 ? void 0 : image.url, height: height, objectFit: objectFit, alt: title, enableGradient: enableGradient, enableOverlay: enableOverlay }))),
            react_1.default.createElement(material_1.Stack, { direction: "row", spacing: 1, sx: sx.contentArea },
                react_1.default.createElement(material_1.Stack, { direction: "column", spacing: 0.5, sx: sx.content },
                    react_1.default.createElement(material_1.Typography, { color: "text.primary", variant: 'subtitle2' }, (0, helpers_1.truncate)(title)),
                    enableRatings == true && (react_1.default.createElement(__1.AvgRating, { resource: resource, size: "small" })),
                    react_1.default.createElement(__1.DisplayFields, { fields: displayFields, resource: resource }),
                    (resource === null || resource === void 0 ? void 0 : resource.user) && react_1.default.createElement(__1.UserChip, { user: resource === null || resource === void 0 ? void 0 : resource.user })),
                react_1.default.createElement(material_1.Stack, { direction: "row", justifyContent: "flex-end" },
                    enableComments == true && react_1.default.createElement(__1.CommentButton, { resource: resource }),
                    enableFavorites == true && (react_1.default.createElement(__1.FavoriteButton, { handle: resource === null || resource === void 0 ? void 0 : resource.handle })),
                    react_1.default.createElement(__2.Actions, { numVisible: 0, actions: actions, resource: resource }))))));
};
exports.default = CardList;
var sx = {
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        pt: 1,
        pb: 2,
        overflow: 'hidden',
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    gradient: {
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
    },
    container: {
        width: '100%',
    },
    image: {
        pr: {
            sm: 2,
            xs: 0,
        },
        mr: {
            sm: 2,
            xs: 0,
        },
        width: {
            sm: 220,
            xs: '100%',
        },
        minWidth: {
            sm: 220,
            xs: '100%',
        },
        height: '100%',
    },
    contentArea: {
        width: '100%',
    },
    contentAreaBorder: {
        pr: 1,
    },
    content: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        py: {
            sm: 0,
            xs: 1,
        },
    },
    contentBorder: {
        px: {
            sm: 0,
            xs: 2,
        },
    },
    description: {
        maxWidth: '320px',
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
    },
    actionsBorder: {
        px: 1,
        pb: {
            sm: 0,
            xs: 1,
        },
    },
};
