const ProductsDB = require("../models").products;

const controller = {
    addProduct: async (req, res) => {
        const product = {
            name : req.body.name,
            price : req.body.price,
            initialPrice : req.body.initialPrice,
            expirationDate : req.body.expirationDate,
            manufacturer : req.body.manufacturer,
            quantity : req.body.quantity,
            userId : req.body.userId
        };

        let errors = {};

        if (Object.keys(errors).length === 0) {
            ProductsDB.create(product)
                .then(() => {
                    res.status(201).send({
                        message: "Product added successfully!"
                    });
                })
                .catch(() => {
                    res.status(500).send({ message: "Server error!" });
                });
        } else {
            res.status(400).send(errors);
        }
    },

    addProductToCommand: async (req, res) => {
       const product = await ProductsDB.findOne({ where: {name: req.name}})
       if(!product) res.send("Product wasn't found")
        else res.send(product)
    },

    getAllProducts: async (req, res) => {
        ProductsDB.findAll()
            .then(products => res.status(200).send(products))
            .catch(err => res.status(500).send(err));
    },

    getProductById: async (req, res) => {
        UsersDB.findByPk(req.params.id)
            .then(products => res.status(200).send(products))
            .catch(err => res.status(500).send(err));
    },

    
}
module.exports = controller;