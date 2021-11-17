### Pré-requisitos globais:
`npm i -g nodemon typescript ts-node`

### Instalação
`npm install`

### Para rodar o projeto
`npm run start-dev`

## Instalando o Mysql
- Instala o mysql e o workbench

## Instalando o PostgreSQL
- https://www.postgresql.org/download/windows/
- senha 1234
- porta 5432

## Instalando o cliente SQL
- https://dbeaver.io/download/   => IREMOS USAR ESSE
- https://www.beekeeperstudio.io/

- Iremos conectar iniciar um conexão com o mysql
* Server Host 127.0.0.1 ou localhost
* username: root
* password: admin  => Essa senha é para conectar no banco de dados mysql que foi cadastrada com a senha admin
* Postgree senha 1234

Arquivos do módulo inicial de Node + Typescript, da estrutura MVC aplicada.

## ORM Object Relational Mapper ( Mapeamento objeto-relacional )  
- Ensina o como funciona o banco de dados ele começa a manuzear

## Introdução ao Sequelize ( biblioteca ) 
- https://sequelize.org/
- Sequelize ela trabalha em base de promessa
- npm install --save sequelize

## Sequelize e Typescript
- npm install --save-dev @types/sequelize

## conexão ao msyql
- npm install mysql2
- configure o arquivo env
MYSQL_DB=teste
MYSQL_USER=root
MYSQL_PASSWORD=admin
MYSQL_PORT=3306

## conexão ao postgreSQL
- Instalar a biblioteca que se comunica com o sequelize
- npm install pg pg-hstore
PG_DB=postgres
PG_USER=postgres
PG_PASSWORD=1234
PG_PORT=5432


* OBS => O mesmo processo de conexão no mysql e postgreSQl 

## MODELS NO SEQUELIZE + TYPESCRIPT

