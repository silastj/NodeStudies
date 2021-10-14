import { Request, Response } from "express";

export const produtos = (req: Request, res: Response) =>{
    let idade: number = 0;
    let mostrarIdade : boolean = false;

    if(req.query.ano){
        // let nome: string = req.query.nome as string;
        // let idade: string = req.query.idade as string;
        let anoNascimento: number = parseInt(req.query.ano as string);
        let anoAtual:number = new Date().getFullYear();
        // console.log(anoNascimento, anoAtual)
        idade = anoAtual - anoNascimento
        mostrarIdade = true
    }
    
    res.render('pages/produtos', {
        idade,
        mostrarIdade

    })
}