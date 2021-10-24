
## Replicar o projeto

1. Para iniciar o projeto usando Node.js
```sh
   npm init -y
```
 # ou

```sh
   yarn init -y
```

2. Instalação do Typescript e suas tipagens
```sh
    npm install typescript ts-node-dev @types/node tsconfig-paths -D
```
 # ou

```sh
   yarn add typescript ts-node-dev @types/node tsconfig-paths -D
```


3. Criar o arquivo "tsconfig.json" que conterá as configurações do Typescript, com o comando:

```sh
    npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
```  
3. Adicionar o express e suas tipagens
```sh
    yarn add express
    yarn add @types/express -D
```  


3. Adicionar o TypeOrm
```sh
    yarn add typeorm
    yarn add @types/typeorm -D
```  


3. Criar migrations
```sh
    yarn typeorm migration:create -n <nome do arquivo>
    yarn typeorm migration:run
```  






## Iniciando o projeto

1. Para clonar o repositório adicione o seguinte comando ao seu terminal:
```sh
   git clone 
```
2. Instalando os pacotes 
```sh
    npm install
```  
3. Rodar migrations
```sh
    npm run migrate
```  
4. Rodar seeders
```sh
    npm run seed
```  
5. Executar a API localmente
```sh
    npm run dev
```

