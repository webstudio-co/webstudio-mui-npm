"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var TableRow = function (props) {
    var row = props.row, fields = props.fields, _a = props.enableEdit, enableEdit = _a === void 0 ? false : _a, _b = props.enableSelect, enableSelect = _b === void 0 ? false : _b, handleClick = props.handleClick, handleEdit = props.handleEdit, selectedIds = props.selectedIds, handleSelect = props.handleSelect;
    var selected = (selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.includes(row === null || row === void 0 ? void 0 : row.id)) ? true : false;
    return (react_1.default.createElement(material_1.TableRow, { sx: sx.root, selected: selected },
        enableSelect && (react_1.default.createElement(components_1.TableCell, { align: 'center', sticky: true },
            react_1.default.createElement(material_1.Checkbox, { checked: selected, onChange: function () { return handleSelect(row); }, value: "true" }))),
        enableEdit && (react_1.default.createElement(components_1.TableCell, { align: "center" },
            react_1.default.createElement(material_1.IconButton, { onClick: function () { return handleEdit(row); }, size: "small" },
                react_1.default.createElement(components_1.Icon, { name: "Edit", size: 20 })))), fields === null || fields === void 0 ? void 0 :
        fields.map(function (field, index) {
            var value = row[field.name];
            return (react_1.default.createElement(components_1.TableCell, { key: index },
                react_1.default.createElement(components_1.Cell, { row: row, field: field, value: value, handleClick: handleClick ? function () { return handleClick(value, row, field); } : null })));
        })));
};
exports.default = TableRow;
var sx = {
    root: {
        height: '50px',
        borderBottom: '1px solid',
        borderColor: 'divider',
    },
    editIcon: {
        height: '20px',
        width: '20px',
    },
};
