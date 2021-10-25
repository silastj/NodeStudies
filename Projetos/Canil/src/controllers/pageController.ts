import { Request, Response } from 'express'

import { createMenuObject } from '../helpers/createMenuObject'

import { Pets } from '../models/pets'

export const home = ( req: Request, res: Response ) => {

    //Rcebendo o getAll da pasta model
    let list = Pets.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    })
}
export const cats = ( req: Request, res: Response ) => {
    
    let list = Pets.getFromType('cat');

    res.render('pages/page',  {
        menu: createMenuObject('cat'),
        banner: {
            title: "Os melhores gatos da região.",
            background: "banner_cat.jpg"
        },
        list
    })
}
export const dogs = ( req: Request, res: Response ) => {

    let list  = Pets.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner:{
            title: "Todos os cachorros da região.",
            background: "banner_dog.jpg"
        },
        list
    })
}
export const fishes = ( req: Request, res: Response ) => {

    let list = Pets.getFromType('fish');

    res.render('pages/page',{
        menu: createMenuObject('fish'),
        banner: {
            title:"Os melhores peixes da região!",
            background: "banner_fish.jpg"
        },
        list
    })
}
