import {Request, Response} from 'express'

export const home = (req: Request, res: Response) =>{

    let idade : number = 51
    let showIdade: boolean = false

    if(idade > 50){
        showIdade = true
    }


    let name = "Amós"
    res.render('pages/home',{
        user:' Silas',
        name,
        idade,
        showIdade,
        products:[
            {title:'Amós', idade:37},
            {title:'Samara', idade: 25},
            {title:'Calebe', idade: 1}
        ],
        carros:[]
    })
}