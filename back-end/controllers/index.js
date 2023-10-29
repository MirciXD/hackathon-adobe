const commands = require("./commands");
const institutions = require("./institutions");
const partners = require("./partners");
const products = require("./products");
const user = require("./user");

const controllers = {
    commands,
    institutions,
    partners,
    products,
    user
};

module.exports = controllers; 
