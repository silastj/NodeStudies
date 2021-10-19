import { Request, Response } from 'express'

import { createMenuObject } from '../helpers/createMenuObject'

export const home = ( req: Request, res: Response ) => {
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    })
}
export const cats = ( req: Request, res: Response ) => {
    res.render('pages/page',  {
        menu: createMenuObject('cat'),
        banner: {
            title: "Os melhores gatos da região.",
            background: "banner_cat.jpg"
        }
    })
}
export const dogs = ( req: Request, res: Response ) => {
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner:{
            title: "Todos os cachorros da região.",
            background: "banner_dog.jpg"
        }
    })
}
export const fishes = ( req: Request, res: Response ) => {
    res.render('pages/page',{
        menu: createMenuObject('fish'),
        banner: {
            title:"Os melhores peixes da região!",
            background: "banner_fish.jpg"
        }
    })
}
