import { Router, Request, Response} from 'express'

const router = Router();
router.get('/', (req: Request, res: Response) =>{
    res.send('Página Home!')
})
router.get('/contato', (req: Request, res: Response) =>{
    res.send('Página Contato!')
})
//rota dinamica
router.get('/carro/:slug', (req: Request, res: Response) =>{
    let slug = req.params.slug
    res.send(`Página de carro ${slug}`)
})

export default router;