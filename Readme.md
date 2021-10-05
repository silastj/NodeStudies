### LEGENDA ###
-  Titulo do comando
# comando para executar
* Oberservação
# --save-dev
 É usado para salvar o pacote para fins de desenvolvimento
 Exemplo: testes de unidade, minificação.
# --save 
 É usado para salvar o pacote necessário para a execução do aplicativo.
# -g
 È instalar a biblioteca globalmente( na maquina para usar em qualquer projeto)

--------------------------------------------------------

### COMANDOS PARA INICIAR PROJETO e BIBLIOTECAS ###

- Iniciar o node
    # npm init
    Ele inicia a instalação do node.

- Start o Node
   # node index.js
    Ele roda o arquivo para visualizar no terminal

- instalação do typescript
    Precisa instalar o typescript global caso não tenha, após isso digitamos:
   # tsc --init
    add tsconfig.json a linha:
   # "moduleResolution": "node",
   # "outDir": "./dist",                       
   # "rootDir": "./src",        

- types node ( instalação apenas no desenvolvimento [ --save-dev])
   # npm install --save-dev @types/node  

- Monitorando as alterações [ watch mode] deixar outro terminal ativo.
   # tsc -w           
    Ver o resultado de produção no outro terminal
   # node dist/index.js 

- Atalhos dentro do package.json 
    add dentro da chave script
   #   "start": "node dist/index.js"
   #     "watch-ts": "tsc -w"
  * Obs: para iniciar no terminal é:
   # npm run start
   # npm run watch-ts
  * Obs: para chamar dois comandos colocaremos o &&
  # "watch-ts": "tsc -w && npm run start"

- export e import COMMON.JS - ES5
    No arquivo que queremos exportar no final
    # module.export.nomedafunção = nomedafunção;
    No arquivo que estamos importando:
    # const Matematica = require('./Matematica')
    # console.log(`SOMA: ${Matematica.Somar(numero,numero2)}`);

- export e import ES6
     No arquivo que queremos exportar no final
     # export function Multiplicar(a:number, b:number):number {
        return a * b}
    No arquivo que estamos importando:
    # import {Multiplicar, Dividir} from './Matematica'
    ou importando tudo:
    # import * as Mat from './Matematica'
    Executamos a função passando os valores:
    # console.log(`MULTIPLICAR: ${Multiplicar(10,20)}`);
    ou usando o Mat:
    # console.log(`MULTIPLICAR: ${Matematica.Multiplicar(numero * numero2)}`); 
    Podemos exportar tudo que tem no arquivo, na parte final do arquivo colocamos:
    # export default { somar, subtrair, dividir, multiplicar}; // os nomes da function ou const
    importando:
    # import Matematica  from './Matematica // dentro de matematica teremos as funções ou const

- Instalando bibliotecas externas( arquivos de terceiros)
    url => https://www.npmjs.com/
    exemplo de biblioteca validator => https://www.npmjs.com/package/validator
    # npm install validator
    # npm install --save-dev @types/validator
    importando a biblioteca validator
    # import validator from 'validator'

- Instalando biblieoteca Nodemon ( Monitorando o node)
    # npm install -g nodemon
    rodar
    nodemon dist/index.js
    * Obs: deixar rodando
    # npm run watch-ts

- Instalando ts-node ( simplifica usando apenas um terminal)
    # npm install -g ts-node
    depois no terminal
    # nodemon src/index.ts
    Podemos criar um script no package.json
    #     "dev": "nodemon src/index.ts"


- Instalando o express (servidor )
    # npm install express
    # npm install @types/express
    Após a instalação mudaremos o package.json o arquivo do nodemon para serve.ts
    * Obs: tem informações no server.ts

- Teoria das rotas
    req: Requisição (exemplo: cookies ...)
    res: Resposta ( que o usuario solicitou, exemplo: imagens, texto ...)
    Importando as rotas:
    # import express, {Request, Response} from 'express'
    Armezenando o express em uma const server:
    # const server = express();
    Criando rota estatica:
    # server.get('/',(req: Request ,res: Response,) =>{
        res.send('Olá Silas')
        })
    Criando uma rota dinamica:
    # server.get('/noticia/:slug', (req: Request, res: Response) =>{
        let slug: string = req.params.slug
        res.send(`A noticia de ${slug}`)
    })
    # server.get('/voos/:origem-:destino', (req: Request, res: Response) =>{
        let {destino, origem} = req.params
        res.send(`O voo é de: ${origem.toUpperCase()} á ${destino.toUpperCase()}`)
    })
    Iniciando o servidor na porta 4000:
    # server.listen(4000)

- Separando as rotas
    Criaremos uma pasta para colocar as rotas:
    # pasta routes dentro o index.ts
    Dentro do index.ts importar:
    # import { Router, Request, Response} from 'express'
    # const router = Router();
    Depois criaremos as rotas estaticas e dinamicas com router.get de exemplo
    Exportaremos o arquivo:
    # export default router;
    No serve.ts
    Depois importaremos:
    # import mainRoutes from './routes/index'
    Usamos o as routas no server:
    # server.use(mainRoutes);
    Quando tiver mais de um arquivo dentro da pasta routes iremos colocar
    # server.use('/', mainRoutes);
    se tiver outro arquivo ex: painel.ts
    # import painelRoutes from './routes/painel/index'
    # server.use('/painel', painelRoutes)

- Criando a página 404
    Na pasta server.ts
    Importamos o Request e Response e logo abaixo:
    # server.use((req: Request, res: Response) =>{
        res.status(404).send('ERROR: Página não encontrada!')
        })
    
- Criando pasta public deixando os arquivos publicos
    -- css
    -- imgs
    Após a criação das pasta acima iremos colocando dentro server.ts abaixo:
    # server.use(express.static('public'))
    Digitando no Navegador,  tera o retorno do arquivo mencionado acima!
    # http://localhost:4000/css/styles.css
    Usando a biblioteca path do proprio express para deixar dinamico a rota
    # import path from 'path'
    # server.use(express.static(path.join(__dirname,'../public'))); 

    














