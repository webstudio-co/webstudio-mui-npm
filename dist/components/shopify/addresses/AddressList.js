"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var AddressItem_1 = __importDefault(require("./AddressItem"));
var AddressList = function (props) {
    var _a = props || {}, addresses = _a.addresses, handleClick = _a.handleClick, handleEdit = _a.handleEdit, handleDelete = _a.handleDelete;
    return (react_1.default.createElement(material_1.List, { disablePadding: true }, addresses === null || addresses === void 0 ? void 0 : addresses.map(function (address) { return (react_1.default.createElement(AddressItem_1.default, { key: address === null || address === void 0 ? void 0 : address.id, address: address, handleClick: handleClick, handleEdit: handleEdit, handleDelete: handleDelete })); })));
};
exports.default = AddressList;
