import { Request, Response } from 'express'

import { Pets } from '../models/pets'
import { createMenuObject } from '../helpers/createMenuObject'

export const search = ( req: Request, res: Response ) => {

    //buscando no parametro da url o q
    let query: string = req.query.q as string;

    let list = Pets.getSearchName(query)

    //verificando se a pesquisa está vazia, redirect para a home
    if(!query){
        res.redirect('/')
        return;
    }


    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query

    })
}
