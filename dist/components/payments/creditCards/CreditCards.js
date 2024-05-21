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
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var CreditCards = function (props) {
    var stripePublishableKey = (props || {}).stripePublishableKey;
    var _a = (0, hooks_1.useCreditCards)(), loading = _a.delayedLoading, errors = _a.errors, creditCard = _a.creditCard, setCreditCard = _a.setCreditCard, createCreditCard = _a.createCreditCard, deleteCreditCard = _a.deleteCreditCard, selectCreditCard = _a.selectCreditCard, creditCards = _a.creditCards, findCreditCards = _a.findCreditCards, reloadCreditCards = _a.reloadCreditCards;
    var _b = (0, react_1.useState)(false), isEditing = _b[0], setIsEditing = _b[1];
    var _c = (0, react_1.useState)(false), openDeleteModal = _c[0], setOpenDeleteModal = _c[1];
    var handleAddCreditCardClick = function () {
        setCreditCard({});
        setIsEditing(true);
    };
    var handleDelete = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(creditCard === null || creditCard === void 0 ? void 0 : creditCard.id)) return [3 /*break*/, 2];
                    setOpenDeleteModal(false);
                    return [4 /*yield*/, deleteCreditCard(creditCard === null || creditCard === void 0 ? void 0 : creditCard.id)];
                case 1:
                    _a.sent();
                    reloadCreditCards();
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var handleSubmit = function (token) { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createCreditCard({ token: token })];
                case 1:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setIsEditing(false);
                        reloadCreditCards();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteClick = function (creditCard) {
        setCreditCard(creditCard);
        setOpenDeleteModal(true);
    };
    var handleClick = function (creditCard) { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, selectCreditCard(creditCard.id)];
                case 1:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        findCreditCards();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        findCreditCards();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        !isEditing ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(components_1.Loading, { loading: loading }),
            react_1.default.createElement(material_1.List, null, !loading && (creditCards === null || creditCards === void 0 ? void 0 : creditCards.map(function (creditCard) { return (react_1.default.createElement(components_1.SelectableListItem, { key: creditCard.id, selected: creditCard.primary, icon: 'CreditCard', title: creditCard.last_4, description: creditCard.brand, handleClick: function () { return handleClick(creditCard); }, handleDelete: function () { return handleDeleteClick(creditCard); } })); }))),
            (!loading && !(creditCards === null || creditCards === void 0 ? void 0 : creditCards.length)) && (react_1.default.createElement(components_1.Placeholder, { icon: "CreditCard", title: "No Credit Cards", description: "Add a credit card to get started" })),
            react_1.default.createElement(material_1.Box, { sx: sx.actions },
                react_1.default.createElement(material_1.Button, { variant: "contained", onClick: handleAddCreditCardClick }, "Add Credit Card")))) : (react_1.default.createElement(components_1.StripeCreditCard, { publishableKey: stripePublishableKey, handleSubmit: handleSubmit, handleCancel: function () { return setIsEditing(false); } })),
        react_1.default.createElement(components_1.AlertModal, { open: openDeleteModal, title: "Delete Credit Card", description: "Are you sure you want to delete this credit card?", handleConfirm: handleDelete, handleClose: function () { return setOpenDeleteModal(false); } })));
};
exports.default = CreditCards;
var sx = {
    actions: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
};
