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
Importando o menu e model, criaremos o render e inserimos o menu


* Criando a pág 404
Criaremos a pág 404.mustache
dentro do server.ts apontamos para a pág res.render('pages/404')
