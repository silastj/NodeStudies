const Matematica = require('./Matematica')
import {Multiplicar, Dividir} from './Matematica'
import validator from 'validator'

const nome: string = "Amós Silas S"
const email:string = 'silastj@hotmail.com'
const idade: number = 4

console.log(`${nome} é o nome ele tem ${idade} anos.`);

const numero: number = 100
const numero2: number = 20
console.log("SOMA: ",numero + numero2);
console.log(`SOMA: ${Matematica.Somar(numero,numero2)}`);
console.log("SUBTRAIR: ",numero - numero2);
console.log(`SUBTRAIR: ${Matematica.Subtrair(numero - numero2)}`);
console.log("MULTIPLICAR: ",numero * numero2);
console.log(`MULTIPLICAR: ${Multiplicar(10,20)}`);
console.log("DIVIDIR: ",numero / numero2);
console.log(`DIVIDIR: ${Dividir(10,20)}`);
console.log('Lowercase: ',validator.isLowercase(nome))

if(validator.isEmail(email)){
    console.log(`esse ${email} é valido!`)
}else {
    console.log(`esse ${email} não é valido!`);
}