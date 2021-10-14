import { Request, Response } from 'express'

export const carro = (req: Request, res: Response) =>{
    let slug = req.params.slug
    res.send(`Página de carro ${slug}`)
}