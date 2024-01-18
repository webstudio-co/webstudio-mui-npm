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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var ui_1 = require("components/ui");
var hooks_1 = require("hooks");
var router_1 = require("next/router");
var VerifyPin = function (props) {
    var _a = props || {}, logo = _a.logo, title = _a.title, subtitle = _a.subtitle, redirectUrl = _a.redirectUrl, loginUrl = _a.loginUrl, _b = _a.authConfig, authConfig = _b === void 0 ? {} : _b;
    var _c = (0, react_1.useState)(false), showVerifyPin = _c[0], setShowVerifyPin = _c[1];
    var _d = (0, hooks_1.useAuth)(), loading = _d.loading, errors = _d.errors, user = _d.user, setUser = _d.setUser, handleChange = _d.handleChange, sendPin = _d.sendPin, verifyPin = _d.verifyPin;
    var router = (0, router_1.useRouter)();
    var handleSendPin = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendPin(__assign(__assign({}, user), authConfig))];
                case 1:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setShowVerifyPin(true);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleVerifyPin = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, verifyPin(user === null || user === void 0 ? void 0 : user.email, user === null || user === void 0 ? void 0 : user.pin)];
                case 1:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        router.push(redirectUrl);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleResendPin = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setUser(__assign(__assign({}, user), { pin: '' }));
                    return [4 /*yield*/, sendPin(__assign(__assign({}, user), authConfig))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLogin = function () {
        router.push(loginUrl);
    };
    return (react_1.default.createElement(ui_1.LayoutLoader, { loading: loading },
        react_1.default.createElement(ui_1.AuthScreen, { logo: logo, title: title, subtitle: subtitle },
            !showVerifyPin ? (react_1.default.createElement(ui_1.VerifySendPinForm, { errors: errors, user: user, handleChange: handleChange, handleSubmit: handleSendPin })) : (react_1.default.createElement(ui_1.VerifyPinForm, { errors: errors, user: user, handleChange: handleChange, handleSubmit: handleVerifyPin, handleResendPin: handleResendPin })),
            loginUrl && (react_1.default.createElement(material_1.Button, { sx: sx.button, fullWidth: true, onClick: handleLogin, color: "primary" }, "Back to login")))));
};
exports.default = VerifyPin;
var sx = {
    button: {
        mt: 1,
    },
};
