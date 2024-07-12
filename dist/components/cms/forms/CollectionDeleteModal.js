"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var frontend_js_1 = require("frontend-js");
var CollectionDeleteModal = function () {
    var _a = (0, frontend_js_1.useCollection)(), openDelete = _a.openDelete, setOpenDelete = _a.setOpenDelete;
    var handleDelete = (0, hooks_1.useForms)().handleDelete;
    return (react_1.default.createElement(components_1.AlertModal, { open: openDelete, handleClose: function () { return setOpenDelete(false); }, title: "Are you sure you want to delete this item?", description: "This action cannot be reversed.", handleConfirm: handleDelete }));
};
exports.default = CollectionDeleteModal;
