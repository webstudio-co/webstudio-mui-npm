"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var router_1 = require("next/router");
var components_1 = require("../../../components");
var frontend_js_1 = require("frontend-js");
var hooks_1 = require("../../../hooks");
// Call To Action
var EmailSignup = function (props) {
    var router = (0, router_1.useRouter)();
    var appId = (router === null || router === void 0 ? void 0 : router.query).app_id;
    var showAlertSuccess = (0, hooks_1.useAlerts)().showAlertSuccess;
    var _a = props || {}, label = _a.label, title = _a.title, description = _a.description, _b = _a.buttonText, buttonText = _b === void 0 ? 'Subscribe' : _b;
    var _c = (0, frontend_js_1.useResource)({
        name: 'contact',
        url: "/api/v1/apps/".concat(appId, "/contacts"),
    }), errors = _c.errors, delayedLoading = _c.delayedLoading, contact = _c.resource, setContact = _c.setResource, handleChange = _c.handleChange, create = _c.create;
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Contact", contact);
                    return [4 /*yield*/, create(contact)];
                case 1:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setContact({});
                        showAlertSuccess('Thank you for subscribing!');
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(material_1.Box, { sx: sx.root },
        react_1.default.createElement(material_1.Stack, { sx: sx.content, direction: "column", spacing: 1 },
            label && (react_1.default.createElement(components_1.Label, { label: label })),
            title && (react_1.default.createElement(material_1.Typography, { variant: 'h6', color: "text.primary", sx: sx.title }, title)),
            description && (react_1.default.createElement(material_1.Typography, { variant: "body1", color: "text.secondary", sx: sx.description }, description)),
            react_1.default.createElement(material_1.Stack, { sx: sx.actions, direction: "row", spacing: 0 },
                react_1.default.createElement(components_1.TextInput, { errors: errors, name: "email", value: contact === null || contact === void 0 ? void 0 : contact.email, handleChange: handleChange, placeholder: "Enter your email", type: "email", styles: sx.input }),
                react_1.default.createElement(material_1.Button, { sx: sx.button, variant: "contained", color: "primary", onClick: handleSubmit, startIcon: react_1.default.createElement(components_1.IconLoading, { loading: delayedLoading }) }, buttonText)))));
};
exports.default = EmailSignup;
var sx = {
    root: {
        width: '100%',
    },
    content: {
        width: '100%',
        alignItems: 'center',
    },
    label: {
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
        color: 'text.primary',
    },
    description: {
        color: 'text.secondary',
        textAlign: 'center',
        maxWidth: '600px',
    },
    actions: {
        pt: 2,
        textAlign: 'center',
        width: '100%',
        maxWidth: 420
    },
    input: {
        '& .MuiInputBase-input': {
            borderRadius: function (theme) {
                return "".concat(theme.shape.borderRadius, "px 0 0 ").concat(theme.shape.borderRadius, "px");
            },
        },
    },
    button: {
        minWidth: 120,
        borderRadius: function (theme) {
            return "0 ".concat(theme.shape.borderRadius, "px ").concat(theme.shape.borderRadius, "px 0");
        },
    },
};
