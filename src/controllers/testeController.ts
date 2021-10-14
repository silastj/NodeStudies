import { Request, Response } from "express";

export const teste = (req: Request, res: Response) =>{    
    res.send('Página Teste!')
}