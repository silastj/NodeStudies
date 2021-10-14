import { Router } from 'express'
import { home } from '../controllers/homeController'
import { contato } from '../controllers/contatoController'
import { sobre } from '../controllers/sobreController'
import { produtos } from '../controllers/produtosController'
import { teste } from '../controllers/testeController'
import * as CarroController  from '../controllers/carroController'

const router = Router();

router.get('/', home)
router.get('/contato', contato)
router.get('/sobre', sobre)
router.get('/produtos', produtos)
router.get('/teste', teste)


//rota dinamica
router.get('/carro/:slug', CarroController.carro)

export default router;