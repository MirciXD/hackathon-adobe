const JuncCommandsProductsDb = require("../models").JuncCommandsProductsDb;

const controller = {
  addProductToCommand: (req, res) => {
    console.log(req.body);
    const { productId, noOfProducts } = req.body;
    let error = [];
    if (!productId || !noOfProducts) {
      console.log("Unul sau mai multe campuri nu au fost introduse!");
      error.push("Unul sau mai multe campuri nu au fost introduse!");
    } else if (error.length == 0) {
      JuncCommandsProductsDb.create({ productId, noOfProducts })
        .then((junc) => {
          res.status(201).send(junc);
          console.log(junc);
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send({ message: "Eroare la adaugarea produsului in comanda" });
        });
    }
  }
};
module.exports = controller;
