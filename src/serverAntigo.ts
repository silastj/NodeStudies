import express, {Request, Response} from 'express' // importando o express

const server = express(); //armazendo o metodo express na const server
server.get('/',(req: Request ,res: Response,) =>{
    res.send('Olá Silas')
})

//rota dinamica
server.get('/noticia/:slug', (req: Request, res: Response) =>{
    let slug: string = req.params.slug
    res.send(`A noticia de ${slug}`)
})
server.get('/voos/:origem-:destino', (req: Request, res: Response) =>{
    let {destino, origem} = req.params
    res.send(`O voo é de: ${origem.toUpperCase()} á ${destino.toUpperCase()}`)
})

server.listen(4000) // iniciando o servidor na porta 4000(locahost:4000)

