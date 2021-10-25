### Canil
Projeto em Nodejs 


### Pré-requisitos globais
`npm install -g nodemon typescript ts-node`

### Instalação
`npm install`

### Rodar o projeto
`npm run dev`


# Passo a passo
 * Iniciar o Node
 - npm init
 * Iniciar o typescript
 - tsc --init
 - ajustar o arquivo tsconfig.json( es6 / "outDir": "./src" / "outFile": "./dist" / "moduleResolution": "node",)
 * instalar => npm install express mustache-express dotenv
 * instalar dependencias  de desenvolvimentos
 - npm install --save-dev @types/express @types/mustache-express @types/node
 * Criando o script para rodar 
 * Configurando o arquivo server.ts
 * Configurando as rotas dentro da pasta routes index.ts
 *  Deixando dinamico as páginas, iremos criar um objeto dentro da pagecontrollers.ts passsando title, background, 
 * Ativando o menu, meio complexo, criando arquivo dentro da pasta helpers, criando um função tipada, passando um array no type e objeto dentro da função, criaremos uma condição de estiver diferente de vazio e setamos como true, depois retornaremos o mesmo.
 * importamos para o controller, inserimos dentro do objeto passado, passando o metodo e como parametro o valor de cada menu, já no header criaremos a condição em cada menu se tiver menu.all returna active, se tiver menu.cat returna active
 * Criando o model => 


 * Listando os pets criado no models no controller
 Importamos   os { Pet} dentro do pageController.ts
 declaro a let list = Pet.getAll(); dentro da const home que pega todas os pets
 e retorno a list abaixo
 * Na pasta view coloca a variavel condicional abrindo e fechando e dentro de cada div trazendo o seus valores como image,name,cor e sex


* Criando Busca 
Importando o menu e model, criaremos o render e inserimos o menu, obs exportamos o query e 
pegamos no header para inserir o valor no atributo value="{{query}}"


* Criando a pág 404
Criaremos a pág 404.mustache
dentro do server.ts apontamos para a pág res.render('pages/404')

* add no Heroku
Precisamos informar o heroku qual node estamos trabalhando
node -v no terminal
depois iremos colocar dentro do package.json
"engines":{ "node": "15.x},

Na raiz criaremos um novo arquivo Procfile
Dentro dele iremos inseri os dados de uma pergunta, como faço para rodar o projeto?:
web : npm start
Criamos dentro do package.json o script start
"start": "node dist/server.ts",
Para importar o views instalamos a biblieoteca copyfiles
npm install --save-dev copyfiles

Inserimos mais um script no package.json
"postinstall": "tsc && copyfiles -u 1 src/**/*.mustache dist/",

depois que rodamos  npm run postinstall
ela cria a pasta dist e depois rodamos npm start para ele rodar com os arquvos .js


Depois de criar a conta no heroku iremos procurar o heroku cli

Após instalar, verificar se foi instalado, heroku --version
heroku login

Depois iremos até a pasta do projeto
heroku create
depois git add . git commit -m "add heroku" git push origin heroku master