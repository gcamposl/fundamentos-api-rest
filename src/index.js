const express = require("express");

const app = express()
//localhost:3333
app.use(express.json()); //middleware
/*
* POST - Inserir informação dentro do servidor
* GET - Busca informação dentro do servidor
* PUT - Alterar informação dentro do servidor
* PATCH - Alterar informação específica dentro do servidor
* DELETE - Deletar informação dentro do servidor
*/

/*
  Tipos de parametros
  * Routes params => identificar um recurso para editar, buscar e deletar um recurso.
  * Query Params => Paginação / Filtro
  * Body Params => Os objetos Inserção/Alteração (JSON)
*/

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["curso 1", "curso 2", "curso 3"]);
})

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["curso 1", "curso 2", "curso 3", "curso 4"]);
})

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(["curso 6", "curso 2", "curso 3", "curso 4"]);
})

app.patch("/courses/:id", (request, response) => {
  return response.json(["curso 6", "curso 7", "curso 3", "curso 4"])
})

app.delete("/courses/:id", (request, response) => {
  return response.json(["curso 6", "curso 7", "curso 4"])
})

app.listen(3333)