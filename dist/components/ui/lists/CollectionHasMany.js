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
var frontend_js_1 = require("frontend-js");
var router_1 = require("next/router");
var components_1 = require("../../../components");
var helpers_1 = require("../../../helpers");
var CollectionHasMany = function (props) {
    var _a = props.layout, layout = _a === void 0 ? 'list' : _a, _b = props.style, style = _b === void 0 ? 'card' : _b, field = props.field, url = props.url, foreignUrl = props.foreignUrl, navigateUrl = props.navigateUrl, handle = props.handle, _c = props.perPage, perPage = _c === void 0 ? 5 : _c, _d = props.editing, editing = _d === void 0 ? false : _d, buttonText = props.buttonText, _e = props.query, defaultQuery = _e === void 0 ? null : _e, _f = props.autoPlay, autoPlay = _f === void 0 ? false : _f, _g = props.arrows, arrows = _g === void 0 ? false : _g, _h = props.showDots, showDots = _h === void 0 ? true : _h, _j = props.enableBorder, enableBorder = _j === void 0 ? false : _j, _k = props.enableGradient, enableGradient = _k === void 0 ? false : _k;
    var router = (0, router_1.useRouter)();
    var _l = (0, react_1.useState)([]), documents = _l[0], setDocuments = _l[1];
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _m = (0, frontend_js_1.useResource)({
        url: url,
    }), resource = _m.resource, findOne = _m.findOne;
    var _o = (0, frontend_js_1.useResource)({
        url: foreignUrl,
    }), loading = _o.loading, query = _o.query, resources = _o.resources, findMany = _o.findMany;
    var handleClick = function (item) {
        if (!editing && clientUrl && navigateUrl && (item === null || item === void 0 ? void 0 : item.handle)) {
            router.push("".concat(clientUrl).concat(navigateUrl, "/").concat(item === null || item === void 0 ? void 0 : item.handle));
        }
    };
    (0, react_1.useEffect)(function () {
        if (handle) {
            findOne(handle);
        }
    }, [handle]);
    (0, react_1.useEffect)(function () {
        if (resource && field) {
            setDocuments((0, helpers_1.getDocumentValue)(resource, field));
        }
    }, [resource, field]);
    (0, react_1.useEffect)(function () {
        if (foreignUrl && documents) {
            var documentIds = documents.map(function (document) { return document.id; });
            findMany(__assign(__assign(__assign({}, query), defaultQuery), { filters: {
                    AND: [
                        {
                            id: {
                                in: documentIds,
                            },
                        },
                    ],
                }, per_page: perPage, page: 1 }));
        }
    }, [documents, foreignUrl, defaultQuery]);
    return (react_1.default.createElement(components_1.StyledList, { resources: resources, layout: layout, style: style, editing: editing, loading: loading, buttonText: buttonText, handleClick: handleClick, 
        //@ts-ignore
        autoPlay: autoPlay, arrows: arrows, showDots: showDots, enableBorder: enableBorder, enableGradient: enableGradient }));
};
exports.default = CollectionHasMany;
var sx = {
    root: {
        width: '100%',
    },
};
