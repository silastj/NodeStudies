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
})

router.get('/teste', (req: Request, res: Response) =>{    
    res.send('Página Teste!')
})


//rota dinamica
router.get('/carro/:slug', (req: Request, res: Response) =>{
    let slug = req.params.slug
    res.send(`Página de carro ${slug}`)
})

export default router;