const UsersDB = require("../models").user;
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const controller = {
    addUser: async (req, res) => {
        
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            isAdmin: req.body.isAdmin
        };

        try {
            user.password = await bcryptjs.hash(user.password, 10);
        } catch (err) {
            console.log(err)
        }


        let errors = {};

        if (Object.keys(errors).length === 0) {
            UsersDB.create(user)
                .then(() => {
                    res.status(201).send({
                        message: "User added successfully!"
                    });
                })
                .catch(() => {
                    res.status(500).send({ message: "Server error!" });
                });
        } else {
            res.status(400).send(errors);
        }
    },

    getAllUsers: async (req, res) => {
        UsersDB.findAll()
            .then(users => res.status(200).send(users))
            .catch(err => res.status(500).send(err));
    },

    getUserById: async (req, res) => {
        UsersDB.findByPk(req.params.id)
            .then(users => res.status(200).send(users))
            .catch(err => res.status(500).send(err));
    },

    getCurrentUser: async (req, res) =>{
        const user = req.params.user;
        if(!user) return res.status(400).send("You are not logged in!")
        else {return res.status(200).send(req.params.id)
        }
    },

    login: async (req, res) => {
        UsersDB.findOne({ where: { email: req.body.email } })
            .then((users) => {
                if (users === null) {
                    res.status(401).send({
                        message: "There is no account associated to this email address!",
                    });
                } else {
                    bcryptjs.compare(
                        req.body.password,
                        users.password,
                        function (err, result) {
                            if (result) {
                                const token = jwt.sign(
                                    {
                                        email: users.email,
                                        recruitId: users.userId,
                                    },
                                    "secret",
                                    function (err, token) {
                                        res.cookie("jwt", token, {httpOnly:true})
                                        res.status(200).send({
                                            message:
                                                "Te-ai autentificat cu succes!",
                                            token: token,
                                            user: users,
                                        });
                                    }
                                );
                            } else {
                                res.status(401).send({
                                    message: "Nu exista acest cont!",
                                });
                            }
                        }
                    );
                }
            })
            .catch((error) => {
                console.log(error.message);
                res.status(500).send({
                    message: "A crapat serveru!",
                });
            });
    },

    logout: (req, res) => {
        req.session.reset();
        res.status(200).send("You've been logged out");
    },


}
module.exports = controller;