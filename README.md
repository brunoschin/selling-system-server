# Schin CoffeShop `selling-system-server`

REST (Representational State Transfer) é um estilo arquitetural para projetar serviços web que utiliza uma abordagem baseada em recursos, permitindo a interação e manipulação de dados por meio de operações HTTP, como GET, POST, PUT e DELETE.

## `ROTAS`

- `/api/client` exceto `PUT /:id`
- `/api/order`
- `/api/product`

## `GET /`

Retorna todos os objetos disponíveis.

## `GET /:id`

Retorna um objeto específico com base no ID fornecido.

## `POST /`

Cria um novo objeto.

## `PUT /:id`

Atualiza um objeto existente com base no ID fornecido.

## `DELETE /:id`

Exclui um objeto existente com base no ID fornecido.
