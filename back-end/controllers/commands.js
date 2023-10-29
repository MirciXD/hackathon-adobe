const CommandsDb = require("../models").commands
const JuncCommandsProducts = require("../models").JuncCommandsProducts
const UsersDb = require("../models").user
const UserController = require("./user")
const productDb = require("../models").products
const productController = require("./products")

const controller = {
    addCommands: (req, res) => {
        const command = {
            price : req.body.price,
            userId : req.body.userId
        };

        const user = UserController.getCurrentUser()
        
        command.userId=user.userId

        const product = productController.addProductToCommand()

        

        let errors = {};

        if (Object.keys(errors).length === 0) {
            CommandsDb.create(command)
                .then(() => {
                    res.status(201).send({
                        message: "Command added successfully!"
                    });
                })
                .catch(() => {
                    res.status(500).send({ message: "Server error!" });
                });
        } else {
            res.status(400).send(errors);
        }
    },

    getCommandsByID: (req, res) =>{
        const {id}=req.params
        if(!id){
            res.status(400).send({message: 'Trebuie specificat un ID'})
        }

        CommandsDb.findByPk(id)
        .then((commands)=>{
            if(commands){
                res.status(200).send(commands)
            } else {
                res.status(404).send({message:"The command was not found!"})
            }
        })
        .catch((err)=>{
            console.error(err);
            res.status(500).send({ message: "Serve error!"})
        })
    },

    getAllCommands: (req, res) => {
        CommandsDb.findAll()
        .then((commands) =>{
            res.status(200).send(commands)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send("Server error!")
        })
    },

    makeCommand: (req, res) =>{

    }
}

module.exports = controller