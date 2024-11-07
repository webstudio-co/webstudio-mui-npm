'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var ShowModal = function (props) {
    var _a = (0, frontend_js_1.useResourceContext)(), openShow = _a.openShow, setOpenShow = _a.setOpenShow, resource = _a.resource, url = _a.url;
    var _b = props || {}, _c = _b.metafields, metafields = _c === void 0 ? [] : _c, enableComments = _b.enableComments, enableLikes = _b.enableLikes, enableFavorites = _b.enableFavorites, enableSharing = _b.enableSharing;
    if (!resource)
        return null;
    return (react_1.default.createElement(__1.Drawer, { open: openShow, handleClose: function () { return setOpenShow(false); }, title: resource === null || resource === void 0 ? void 0 : resource.title },
        react_1.default.createElement("div", { className: "flex flex-col space-y-6 pb-[40px] w-full" },
            react_1.default.createElement(components_1.BlurFade, { delay: 0.25, inView: true, className: "w-full" },
                react_1.default.createElement("div", { className: "w-full" },
                    react_1.default.createElement(__1.CollectionDetails, { resource: resource, metafields: metafields, actions: react_1.default.createElement(__1.SocialButtons, { size: "large", justifyContent: 'center', resource: resource, enableLikes: enableLikes, enableFavorites: enableFavorites, enableSharing: enableSharing }) }),
                    enableComments && (react_1.default.createElement("div", { className: "px-2" },
                        react_1.default.createElement(__1.CommentList, { url: url, handle: resource === null || resource === void 0 ? void 0 : resource.handle }))))))));
};
exports.default = ShowModal;
