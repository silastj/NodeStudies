"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dividir = exports.Multiplicar = void 0;
function Somar(a, b) {
    return a + b;
}
function Subtrair(a, b) {
    return a - b;
}
// ES5
function Multiplicar(a, b) {
    return a * b;
}
exports.Multiplicar = Multiplicar;
function Dividir(a, b) {
    return a / b;
}
exports.Dividir = Dividir;
module.exports.Somar = Somar;
module.exports.Subtrair = Subtrair;
