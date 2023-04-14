"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const router = (0, express_1.Router)();
exports.router = router;
const API_MUSICBRAINZ = axios_1.default.create({ baseURL: 'https://musicbrainz.org/ws/2/genre' });
router.get('/getAllGenresByCount', (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, offset } = req.query;
    const response = yield API_MUSICBRAINZ.get(`/all?limit=${limit}&offset=${offset}&fmt=json`);
    resp.status(200).json(Object.assign({}, response.data));
}));
