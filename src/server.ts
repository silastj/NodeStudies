import express, {Request, Response} from 'express' // importando o express
import mainRoutes from './routes/index' // importando o routes
import path from 'path';
import mustache from 'mustache-express'

const server = express(); //armazendo o metodo express na const server

server.set('view engine', 'mustache');  // chama o mustache
server.set('views',  path.join(__dirname, 'views')); // mostra pro mustache onde fica a pasta
server.engine('mustache', mustache()); //finaliza a chamada

server.use(express.static(path.join(__dirname,'../public'))); // deixando mais dinamico as rotas

server.use(mainRoutes);  // usando no servidor as routas(mainroutes)

server.use((req: Request, res: Response) =>{  //página 404
    res.status(404).send('ERROR: Página não encontrada!')
})

server.listen(4000) // iniciando o servidor na porta 4000(locahost:4000)

