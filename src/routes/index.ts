import { Router, Request, Response} from 'express'

const router = Router();
router.get('/', (req: Request, res: Response) =>{

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
})
router.get('/contato', (req: Request, res: Response) =>{
    let idade : number = 51
    let showIdade: boolean = false

    if(idade > 50){
        showIdade = true
    }


    let name = "Amós"
    res.render('pages/contato',{
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
})
router.get('/sobre', (req: Request, res: Response) =>{
    let idade : number = 51
    let showIdade: boolean = false

    if(idade > 50){
        showIdade = true
    }


    let name = "Amós"
    res.render('pages/sobre',{
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
})
router.get('/produtos', (req: Request, res: Response) =>{
    res.send('Página Produtos!')
})
//rota dinamica
router.get('/carro/:slug', (req: Request, res: Response) =>{
    let slug = req.params.slug
    res.send(`Página de carro ${slug}`)
})

export default router;