<h3 align="center">
  Link Soluções | Challenge
</h3>

<img src="https://i.postimg.cc/G2XN22gX/screen.png" alt="Link Soluções Challenge Screen"/>

<blockquote align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>

## :rocket: Sobre a aplicação

Aplicação de teste para vaga de desenvolvedor frontend na **Link Soluções**
:smile:

O teste consiste em criar um web app para cadastro de pessoas utilizando **Angular**.

## Requisitos

- Construir a estrutura do projeto utilizando o npm (gerenciador de pacotes do Node.js);

- Criar uma página de cadastro de Pessoa com os seguintes campos: ID, Nome, Email, Idade, Login, Senha e Status (ativo/inativo).

- Criar uma listagem dos usuários cadastrados através de uma GRID.

- Criar a rota linkando uma página a outra (Adicionar Pessoa e Listar Pessoa).

- Implementar o consumo da API.

## Tecnologias utilizadas :memo:

- [Angular v11.0.2](https://angular.io)
- [Bootstrap v4.5.3](https://getbootstrap.com)
- [TypeScript v4.0.2](https://www.typescriptlang.org)
- [ngx-toastr v13.1.0](https://ngx-toastr.vercel.app)
- [Angular CLI: v11.0.2](https://cli.angular.io)
- [Node: v14.15.1](https://nodejs.org/en/)
- [json-server v0.16.3](https://www.npmjs.com/package/json-server)

## Como utilizar 🤔

É necessário que você tenha o angular-cli instalado em sua máquina para que você consiga utilizar o `ng serve`, para subir o seu projeto.

Para insalar basta rodar o comando abaixo:

```
npm install -g @angular/cli
```

Agora clone este repositório.

```
git clone https://github.com/ruanvalente/challenge-link-solucoes
```

Entre na pasta `challenge-link-solucoes` e rode o comando `yarn` ou `npm install`, para instalar as dependências do projeto.

```
cd challenge-link-solucoes

ng serve
```

E pronto, seu servidor vai estar rodando em `http://localhost:4200/` :smile:

Para o consumo da API foi utilizado `json-server` que cria uma api rest fake baseado em um arquivo `.json`

Para executar o backend basta roda os seguintes comandos:

```
npm install -g json-server
```

Agora com o pacote instalado basta executar o seguinte comando dentro da pasta do projeto para subir o servidor:

```
json-server db.json  --watch
```
E pronto :smile:

## Executando os testes :smile:

Entre na pasta do projeto e rode o seguinte comando `ng test`

Para mais informações sobre o [Karma](https://karma-runner.github.io).

## Build do projeto

Execute o comando `ng build` para fazer o build do projeto. Todos os arquivos estarão dentro do diretório `dist/`. Você pode utilizar a flag `--prod` para fazer o build para produção.


## Veja a aplicação no ar :smile:

Foi utilizado a plataforma [vercel](https://vercel.com) para o deploy do frontend e para o backend foi utilizada a plataforma [heroku](https://heroku.com)

- [Link Soluções - FrontEnd](https://challenge-link-solucoes.vercel.app)
- [Link Soluções - Backend](https://challenge-link-solucoes-backen.herokuapp.com)

E agora é só se divertir :smile:

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
