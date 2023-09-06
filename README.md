# CHALLENGE FULL-STACK

Este projeto foi desenvolvido como parte de um desafio Full Stack. O objetivo era criar uma aplicação de comércio eletrônico, permitindo aos usuários adicionar produtos ao carrinho, removê-los e, ao concluir a compra, enviar um e-mail com o resumo do pedido.

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:CarlosX26/challenge-fullstack.git
```

Entre no diretório do projeto

```bash
  cd challenge-fullstack
```

Rodando front-end

```bash
  cd front-end
```

1 - Instale as dependências

```bash
  yarn
  # or
  npm i
```

2 - Rodando projeto

```bash
  yarn dev
  # or
  npm run dev
```

Rodando back-end

```bash
  cd back-end
```

1 - Instale as dependências

```bash
  yarn
  # or
  npm i
```

2 - Preencha as variáveis de ambiente

```bash
  PORT=<port_application>

  DB_URL=postgres://<pg_user>:<pg_pass>@<pg_host>:<pg_port>/<pg_db>

  SECRET_KEY=<jwt_secret_key>

  SMTP_HOST=
  SMTP_PORT=
  SMTP_USER=
  SMTP_PASS=
```

3 - Rodando migrações

```bash
  yarn typeorm migration:run -d src/data-source.ts
  # or
  npm run typeorm migration:run -d src/data-source.ts
```

4 - Rodando projeto

```bash
  yarn dev
  # or
  npm run dev
```

## Stack utilizada

**Front-end:** React, Chakra UI e TypeScript.

**Back-end:** Node.js, Express.js, TypeScript e PostgreSQL.
