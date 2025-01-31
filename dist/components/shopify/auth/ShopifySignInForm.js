'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var __1 = require("../..");
var SignInForm = function (props) {
    var errors = props.errors, _a = props.loading, loading = _a === void 0 ? false : _a, customer = props.customer, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleForgotPassword = props.handleForgotPassword, handleSignup = props.handleSignup;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-4" },
        react_1.default.createElement(__1.TextInput, { errors: errors, name: "email", value: customer === null || customer === void 0 ? void 0 : customer.email, placeholder: "Email", handleChange: handleChange }),
        react_1.default.createElement(__1.TextInput, { errors: errors, name: "password", value: customer === null || customer === void 0 ? void 0 : customer.password, type: "password", placeholder: "Password", handleChange: handleChange }),
        react_1.default.createElement(react_2.Button, { fullWidth: true, onPress: handleSubmit, disabled: loading, isLoading: loading }, "Sign In"),
        handleSignup && (react_1.default.createElement(react_2.Button, { fullWidth: true, variant: "ghost", onPress: handleSignup }, "No account? Sign up")),
        handleForgotPassword && (react_1.default.createElement(react_2.Button, { fullWidth: true, variant: "ghost", onPress: handleForgotPassword }, "Forgot password?"))));
};
exports.default = SignInForm;
