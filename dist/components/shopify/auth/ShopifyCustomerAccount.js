'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var __1 = require("../..");
var frontend_shopify_1 = require("frontend-shopify");
var navigation_1 = require("next/navigation");
var lucide_react_1 = require("lucide-react");
var hooks_1 = require("../../../hooks");
var MenuItem = function (props) {
    var _a = props || {}, item = _a.item, handleClick = _a.handleClick;
    return (react_1.default.createElement("li", null,
        react_1.default.createElement(components_1.Button, { variant: "ghost", className: "w-full justify-start", onClick: function () { return handleClick(item === null || item === void 0 ? void 0 : item.path); } },
            item.icon && react_1.default.createElement("span", { className: "mr-2" }, item.icon),
            item.label)));
};
var MENU_ITEMS = [
    {
        label: 'Account Details',
        path: '/shopify/customer',
        icon: react_1.default.createElement(lucide_react_1.User, { className: "h-4 w-4" }),
    },
    {
        label: 'Addresses',
        path: '/shopify/addresses',
        icon: react_1.default.createElement(lucide_react_1.MapPin, { className: "h-4 w-4" }),
    },
    {
        label: 'Order History',
        path: '/shopify/orders',
        icon: react_1.default.createElement(lucide_react_1.ShoppingCart, { className: "h-4 w-4" }),
    },
    {
        label: 'Sign Out',
        path: '/logout',
        icon: react_1.default.createElement(lucide_react_1.LogOut, { className: "h-4 w-4" }),
    },
];
var ShopifyCustomerAccount = function (props) {
    var _a = props || {}, loginUrl = _a.loginUrl, _b = _a.title, title = _b === void 0 ? 'My Account' : _b, _c = _a.subtitle, subtitle = _c === void 0 ? 'Manage your account' : _c;
    var router = (0, navigation_1.useRouter)();
    var clientUrl = (0, hooks_1.useApp)().clientUrl;
    var customer = (0, frontend_shopify_1.useAuth)().customer;
    var handleLogin = function () {
        if (loginUrl)
            router.push(loginUrl);
    };
    var handleClick = function (path) {
        router.push("".concat(clientUrl).concat(path));
    };
    return (react_1.default.createElement(__1.AuthScreen, { title: title, subtitle: subtitle }, customer ? (react_1.default.createElement("ul", { className: "space-y-1" }, MENU_ITEMS.map(function (item, i) { return (react_1.default.createElement(MenuItem, { key: i, item: item, handleClick: handleClick })); }))) : (react_1.default.createElement(__1.Placeholder, { title: "Please sign in.", description: "You must be signed in to manage your account.", buttons: react_1.default.createElement(components_1.Button, { onClick: handleLogin }, "Sign In") }))));
};
exports.default = ShopifyCustomerAccount;
