const request = require("supertest");
const urlApi = "http://localhost:3000";

describe("Testes utilizando autenticação admin", () => {
  test("Criar um autor com dados de teste", () => {
    return request(urlApi)
      .post("/autor")
      .send({
        autor_id: 99,
        nome: "Senhora Carolina Milena Almada",
        email: "ccarolinamilenaalmada@gmail.com",
        telefone: "83996565550",
      })
      .auth("admin", "desafio")
      .then((res) => expect(res.status).toBe(200));
  });

  test("Verificar se o autor foi criado corretamente no banco de dados", () => {
    return request(urlApi)
      .get("/autor/99")
      .auth("admin", "desafio")
      .expect(200, {
        autor_id: 99,
        nome: "Senhora Carolina Milena Almada",
        email: "ccarolinamilenaalmada@gmail.com",
        telefone: "83996565550",
      });
  });

  test("Criar um livro com dados de teste para o autor criado", () => {
    return request(urlApi)
      .post("/livro")
      .send({
        livro_id: 99,
        nome: "Novas APIs em Node.js",
        valor: 90,
        estoque: 25,
        autor_id: 1,
      })
      .auth("admin", "desafio")
      .then((res) => expect(res.status).toBe(200));
  });

  test("Verificar se o livro foi criado corretamente no banco de dados", () => {
    return request(urlApi)
      .get("/livro/99")
      .auth("admin", "desafio")
      .expect(200, {
        livro_id: 99,
        nome: "Novas APIs em Node.js",
        valor: "90",
        estoque: 25,
        autor_id: 1,
      });
  });

  test("Criar um cliente com dados de teste", () => {
    return request(urlApi)
      .post("/cliente")
      .send({
        cliente_id: 99,
        nome: "Vitor Martin Pinto",
        email: "vvitormartinpinto@gmail.com",
        senha: "GGh0SmQ5Wo",
        telefone: "13720467392",
        endereco: "Rua Quarenta e Nove 356, São Luís-MA",
      })
      .auth("admin", "desafio")
      .then((res) => expect(res.status).toBe(200));
  });

  test("Verificar se o cliente foi criado corretamente no banco de dados", () => {
    return request(urlApi)
      .get("/cliente/99")
      .auth("admin", "desafio")
      .expect(200, {
        cliente_id: 99,
        nome: "Vitor Martin Pinto",
        email: "vvitormartinpinto@gmail.com",
        senha: "GGh0SmQ5Wo",
        telefone: "13720467392",
        endereco: "Rua Quarenta e Nove 356, São Luís-MA",
      });
  });
});

// afterAll(() => {
//   return request(urlApi)
//     .delete("/livro/99")
//     .auth("admin", "desafio")
//     .then((res) => expect(res.status).toBe(200));
// });
