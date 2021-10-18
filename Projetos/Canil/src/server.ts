import express,{ Request, Response} from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'

dotenv.config();

const server = express();

server.set('view engine', ' mustache');
server.set('view', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// public
server.use(express.static(path.join(__dirname, '../public')));

//rotas
server.use(mainRoutes)

//pág 404
server.use((req, res) => {
    res.send('Página não Encontrada')
})

//servidor rodadndo
server.listen(process.env.PORT)
