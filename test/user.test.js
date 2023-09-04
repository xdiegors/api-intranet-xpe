const request = require("supertest");
const urlApi = "http://localhost:3000";

describe("Testes utilizando autenticação usuário", () => {
  test("Verificar se usuário consegue acessar o livro criado no banco de dados", () => {
    return request(urlApi)
      .get("/livro/99")
      .auth("giovanabetinabarbosa@gmail.com", "ZjRxDsNQt4")
      .expect(200, {
        livro_id: 99,
        nome: "Novas APIs em Node.js",
        valor: "90",
        estoque: 25,
        autor_id: 1,
      });
  });

  test("Criar uma venda com dados de teste", () => {
    return request(urlApi)
      .post("/venda")
      .send({
        venda_id: 99,
        valor: "90",
        data: "2023-03-29",
        cliente_id: 1,
        livro_id: 99,
      })
      .auth("giovanabetinabarbosa@gmail.com", "ZjRxDsNQt4")
      .then((res) => expect(res.status).toBe(200));
  });

  test("Verificar se a venda foi salva corretamente no banco de dados", () => {
    return request(urlApi)
      .get("/venda/99")
      .auth("giovanabetinabarbosa@gmail.com", "ZjRxDsNQt4")
      .expect(200, {
        venda_id: 99,
        valor: "90",
        data: "2023-03-29",
        cliente_id: 1,
        livro_id: 99,
      });
  });
});

// afterAll(() => {
//   return request(urlApi)
//     .delete("/livro/99")
//     .auth("admin", "desafio")
//     .then((res) => expect(res.status).toBe(200));
// });
