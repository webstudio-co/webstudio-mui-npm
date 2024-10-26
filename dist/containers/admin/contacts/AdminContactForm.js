'use client';
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminContactForm = function (props) {
    var FORM_FIELDS = [
        { name: 'name', label: 'Name', variant: 'string' },
        { name: 'email', label: 'Email', variant: 'string' },
        { name: 'phone', label: 'Phone', variant: 'string' },
        { name: 'company', label: 'Company', variant: 'string' },
        {
            name: 'accepts_marketing',
            label: 'Accepts marketing',
            variant: 'boolean',
        },
    ];
    return react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { fields: FORM_FIELDS }));
};
exports.default = AdminContactForm;
