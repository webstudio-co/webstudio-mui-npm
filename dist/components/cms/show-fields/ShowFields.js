'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ShowField_1 = __importDefault(require("./ShowField"));
var react_2 = require("@nextui-org/react");
var ShowFields = function (props) {
    var _a = props || {}, className = _a.className, fields = _a.fields, resource = _a.resource;
    return (react_1.default.createElement("div", { className: (0, react_2.cn)('w-full flex flex-col space-y-4', className) }, fields === null || fields === void 0 ? void 0 : fields.map(function (field, index) { return (react_1.default.createElement(ShowField_1.default, { key: index, field: field, resource: resource })); })));
};
exports.default = ShowFields;
