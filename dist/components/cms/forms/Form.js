'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var FormFields_1 = __importDefault(require("./FormFields"));
var Form = function (props) {
    var errors = props.errors, loading = props.loading, fields = props.fields, resource = props.resource, handleChange = props.handleChange, handleRemove = props.handleRemove, handleSubmit = props.handleSubmit, handleAddAttachment = props.handleAddAttachment, handleRemoveAttachment = props.handleRemoveAttachment, _a = props.buttonText, buttonText = _a === void 0 ? 'Submit' : _a, inputOptions = props.inputOptions, inputParams = props.inputParams;
    return (react_1.default.createElement("div", { className: "flex flex-col space-y-4" },
        react_1.default.createElement(FormFields_1.default, { errors: errors, fields: fields, resource: resource, handleChange: handleChange, handleRemove: handleRemove, handleAddAttachment: handleAddAttachment, handleRemoveAttachment: handleRemoveAttachment, inputOptions: inputOptions, inputParams: inputParams }),
        handleSubmit && (react_1.default.createElement(react_2.Button, { variant: "solid", color: "primary", isLoading: loading, onPress: handleSubmit, disabled: loading }, buttonText))));
};
exports.default = Form;
