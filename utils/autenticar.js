function autorizarAdmin() {
  return (req, res, next) => {
    if (req.auth.user) {
      if (req.auth.user == "admin") {
        next(); // libera o acesso desses roles
      } else {
        res.status(403).send("Usuário não autorizado");
      }
    } else {
      res.status(403).send("Usuário não encontrado");
    }
  };
}

// buscar os usuários

function autorizarUser() {
  return (req, res, next) => {
    if (req.auth.user === "user") {
      res.send("user");
      // next(); // libera o acesso de usuarios
    } else {
      res.status(401).send("Não permitido");
    }
  };
}
// function autorizarUser() {
//   return (req, res, next) => {
//     if (req.auth.user) {
//       next(); // libera o acesso de usuarios
//     } else {
//       res.status(401).send("Não permitido");
//     }
//   };
// }

export { autorizarAdmin, autorizarUser };
