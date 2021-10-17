import {Request, Response} from 'express'

import {NewProduct} from '../models/Product'

export const home = (req: Request, res: Response) =>{

    let idade : number = 51
    let showIdade: boolean = false

    if(idade > 50){
        showIdade = true
    }

    // pegando todos os produtos
    let productAll = NewProduct.getAll();
    //filtrando por price igual ou acima de 12 reais
    let priceChosen = 3000
    let productFilter = NewProduct.getBigFilters(priceChosen)

    let name = "Amós"
    res.render('pages/home',{
        user:' Silas',
        name,
        idade,
        showIdade,
        products: productAll,
        products12: productFilter,
        carros:[]
    })
}