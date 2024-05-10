"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var frontend_js_1 = require("frontend-js");
var material_1 = require("@mui/material");
var components_1 = require("../../../components");
var hooks_1 = require("../../../hooks");
var TeamList = function (props) {
    var _a = (0, hooks_1.useTeams)(), loading = _a.delayedLoading, errors = _a.errors, team = _a.team, setTeam = _a.setTeam, updateTeam = _a.updateTeam, createTeam = _a.createTeam, teams = _a.teams, findTeams = _a.findTeams, handleChange = _a.handleChange, reloadTeams = _a.reloadTeams, deleteImage = _a.deleteImage;
    var _b = (0, frontend_js_1.useAuth)(), currentUser = _b.currentUser, fetchMe = _b.fetchMe;
    var selectTeam = (0, hooks_1.useTeams)().selectTeam;
    var _c = (0, react_1.useState)(false), isEditing = _c[0], setIsEditing = _c[1];
    var _d = (0, react_1.useState)(-1), activeTeamId = _d[0], setActiveTeamId = _d[1];
    var handleEditClick = function (team) {
        setTeam(team);
        setIsEditing(true);
    };
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(team === null || team === void 0 ? void 0 : team.id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, updateTeam(team)];
                case 1:
                    resp = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, createTeam(team)];
                case 3:
                    resp = _a.sent();
                    _a.label = 4;
                case 4:
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setIsEditing(false);
                        reloadTeams();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteImage = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, deleteImage(team === null || team === void 0 ? void 0 : team.id)];
                case 1:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.id) {
                        setTeam(resp);
                    }
                    findTeams();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleClick = function (team) { return __awaiter(void 0, void 0, void 0, function () {
        var resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, selectTeam(team.id)];
                case 1:
                    resp = _a.sent();
                    if (resp === null || resp === void 0 ? void 0 : resp.team_id) {
                        setActiveTeamId(resp === null || resp === void 0 ? void 0 : resp.team_id);
                        fetchMe();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) {
            setActiveTeamId(currentUser === null || currentUser === void 0 ? void 0 : currentUser.team_id);
            findTeams();
        }
    }, [currentUser === null || currentUser === void 0 ? void 0 : currentUser.id]);
    return (react_1.default.createElement(react_1.default.Fragment, null, !isEditing ? (react_1.default.createElement(material_1.List, null, teams === null || teams === void 0 ? void 0 : teams.map(function (team) {
        var selected = (team === null || team === void 0 ? void 0 : team.id) == activeTeamId;
        return (react_1.default.createElement(components_1.SelectableListItem, { key: team.id, selected: selected, avatar: react_1.default.createElement(components_1.TeamAvatar, { team: team }), title: team.name, handleClick: function () { return handleClick(team); }, handleEdit: selected ? function () { return handleEditClick(team); } : undefined }));
    }))) : (react_1.default.createElement(components_1.TeamForm, { loading: loading, errors: errors, team: team, handleChange: handleChange, handleSubmit: handleSubmit, handleCancel: function () { return setIsEditing(false); }, handleSuccess: function () { return setIsEditing(false); }, handleDeleteImage: handleDeleteImage }))));
};
exports.default = TeamList;
