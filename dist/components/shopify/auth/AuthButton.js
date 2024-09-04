"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var frontend_shopify_1 = require("frontend-shopify");
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var router_1 = require("next/router");
var lucide_react_1 = require("lucide-react");
var hooks_2 = require("../../../hooks");
var AuthButton = function () {
    var router = (0, router_1.useRouter)();
    var _a = (0, frontend_shopify_1.useAuth)(), logout = _a.logout, customer = _a.customer;
    var _b = (0, hooks_1.useMenu)(), open = _b.open, anchorEl = _b.anchorEl, closeMenu = _b.closeMenu, toggleMenu = _b.toggleMenu;
    var clientUrl = (0, hooks_2.useApp)().clientUrl;
    var handleClick = function (path) {
        closeMenu();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        router.push("".concat(clientUrl, "/").concat(path));
    };
    var handleLogoutClick = function () {
        logout();
        router.push("".concat(clientUrl, "/shopify/login"));
    };
    if (!customer)
        return null;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.IconButton, { sx: sx.button, onClick: toggleMenu },
            react_1.default.createElement(lucide_react_1.User, { size: 32, color: "black" })),
        react_1.default.createElement(components_1.UserMenu, { open: open, anchorEl: anchorEl, toggleMenu: toggleMenu, handleLogoutClick: handleLogoutClick, handleClick: handleClick })));
};
exports.default = AuthButton;
var sx = {
    button: {
        bgcolor: 'background.paper',
    },
};
