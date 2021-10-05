function Somar(a:number, b:number):number {
    return a + b
}
function Subtrair(a:number, b:number):number {
    return a - b
}

// ES5

export function Multiplicar(a:number, b:number):number {
    return a * b
}
export function Dividir(a:number, b:number):number {
    return a / b
}


module.exports.Somar = Somar
module.exports.Subtrair = Subtrair

