const PartnersDb = require("../models").partners;

const controller = {
  addPartner: (req, res) => {
    console.log(req.body);
    const { name, type, adress } = req.body;
    let error = [];
    if (!name || !type || !adress) {
      console.log("Unul sau mai multe campuri nu au fost introduse!");
      error.push("Unul sau mai multe campuri nu au fost introduse!");
    } else if (error.length == 0) {
      PartnersDb.create({ name, type, adress })
        .then((partners) => {
          res.status(201).send(partners);
          console.log(partners);
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send({ message: "Eroare la adaugarea partenerului" });
        });
    }
  },

  getPartnerByID: (req, res) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send({ message: "Trebuie specificat un ID" });
    }

    PartnersDb.findByPk(id)
      .then((partners) => {
        if (partners) {
          res.status(200).send(partners);
        } else {
          res.status(404).send({ message: "The partener was not found!" });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({ message: "Serve error!" });
      });
  },

  getAllPartners: (req, res) => {
    PartnersDb.findAll()
      .then((partners) => {
        res.status(200).send(partners);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Server error!");
      });
  },
};
module.exports = controller;
