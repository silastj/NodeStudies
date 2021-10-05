"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Matematica = require('./Matematica');
const Matematica_1 = require("./Matematica");
const validator_1 = __importDefault(require("validator"));
const nome = "Amós";
const email = 'silastj@hotmail.com';
const idade = 4;
console.log(`${nome} é o nome ele tem ${idade} anos.`);
const numero = 100;
const numero2 = 20;
console.log("SOMA: ", numero + numero2);
console.log(`SOMA: ${Matematica.Somar(numero, numero2)}`);
console.log("SUBTRAIR: ", numero - numero2);
console.log(`SUBTRAIR: ${Matematica.Subtrair(numero - numero2)}`);
console.log("MULTIPLICAR: ", numero * numero2);
console.log(`MULTIPLICAR: ${Matematica_1.Multiplicar(10, 20)}`);
console.log("DIVIDIR: ", numero / numero2);
console.log(`DIVIDIR: ${Matematica_1.Dividir(10, 20)}`);
console.log('Lowercase: ', validator_1.default.isLowercase(nome));
if (validator_1.default.isEmail(email)) {
    console.log(`esse ${email} é valido!`);
}
else {
    console.log(`esse ${email} não é valido!`);
}
