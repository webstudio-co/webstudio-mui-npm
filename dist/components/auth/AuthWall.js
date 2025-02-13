'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../components");
var react_2 = require("@nextui-org/react");
var hooks_1 = require("../../hooks");
var AuthWall = function () {
    var setAuthOpen = (0, hooks_1.useApp)().setAuthOpen;
    var handleLoginClick = function () {
        setAuthOpen(true);
    };
    return (react_1.default.createElement("div", { className: "container mx-auto max-w-screen-md" },
        react_1.default.createElement(components_1.Empty, { title: "Sign in to view content", description: "You are not logged in.", buttons: react_1.default.createElement(react_2.Button, { variant: "solid", color: "primary", onPress: handleLoginClick }, "Sign in") })));
};
exports.default = AuthWall;
