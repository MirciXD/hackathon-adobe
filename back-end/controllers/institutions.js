const InstitutionsDb = require("../models").institutions

const controller = {
    addInstitutions: (req, res) => {
        const {name, type, adress, phone}= req.body;
        let error = [];
        if(!name || !type || !adress || !phone)
        {
            console.log("Unul sau mai multe campuri nu au fost introduse!");
            error.push("Unul sau mai multe campuri nu au fost introduse!");
        } else if(error.length == 0) {
        InstitutionsDb.create({name, type, adress, email})
        .then((institutions)=>{
            res.status(201).send(institutions)
        })
        .catch((error)=>{
            console.log(error)
            res.status(500).send({message: "Eroare la adaugarea institutiei"})
        })
    }
    },

    getInstitutionByID: (req, res) =>{
        const {id}=req.params
        if(!id){
            res.status(400).send({message: 'Trebuie specificat un ID'})
        }

        InstitutionsDb.findByPk(id)
        .then((institutions)=>{
            if(institutions){
                res.status(200).send(institutions)
            } else {
                res.status(404).send({message:"The partener was not found!"})
            }
        })
        .catch((err)=>{
            console.error(err);
            res.status(500).send({ message: "Serve error!"})
        })
    },

    getAllInstitutions: (req, res) => {
        InstitutionsDb.findAll()
        .then((institutions) =>{
            res.status(200).send(institutions)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send("Server error!")
        })
    }


}

module.exports = controller