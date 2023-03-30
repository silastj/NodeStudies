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
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = exports.login = exports.register = exports.ping = void 0;
const User_1 = require("../models/User");
const ping = (req, res) => {
    res.json({ pong: true });
};
exports.ping = ping;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.email && req.body.password) {
        let { email, password } = req.body;
        let hasUser = yield User_1.User.findOne({ where: { email } });
        if (!hasUser) {
            let newUser = yield User_1.User.create({ email, password });
            res.status(201);
            res.json({ id: newUser.id });
        }
        else {
            res.json({ error: 'E-mail já existe.' });
        }
    }
    res.json({ error: 'E-mail e/ou senha não enviados.' });
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.email && req.body.password) {
        let email = req.body.email;
        let password = req.body.password;
        let user = yield User_1.User.findOne({
            where: { email, password }
        });
        if (user) {
            res.json({ status: true });
            return;
        }
    }
    res.json({ status: false });
});
exports.login = login;
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield User_1.User.findAll();
    let list = [];
    for (let i in users) {
        list.push(users[i].email);
    }
    res.json({ list });
});
exports.list = list;
