"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var hooks_1 = require("../../../hooks");
var cookies_next_1 = require("cookies-next");
var AuthFromCookie = function () {
    var _a = (0, hooks_1.useAuth)(), authCookie = _a.authCookie, fetchMe = _a.fetchMe, currentUser = _a.currentUser, authenticateFromToken = _a.authenticateFromToken;
    (0, react_1.useEffect)(function () {
        var authToken = (0, cookies_next_1.getCookie)(authCookie);
        if (authToken) {
            authenticateFromToken(String(authToken));
            if (!currentUser) {
                fetchMe();
            }
        }
    }, []);
    return null;
};
exports.default = AuthFromCookie;
