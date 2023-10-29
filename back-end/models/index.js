const {Sequelize, DataTypes} = require("sequelize")
const db = require("../config/db")


const UserModel = require("./user")
const CommandsModel = require ("./commands")
const InstitutionsModel = require("./institutions")
const PartnersModel = require("./partners")
const ProductsModel = require("./products")

const user = UserModel(db, Sequelize)
const commands = CommandsModel(db, Sequelize)
const institutions = InstitutionsModel(db, Sequelize)
const partners = PartnersModel(db, Sequelize)
const products = ProductsModel(db, Sequelize)

user.hasMany(commands)
commands.belongsTo(user)

const juncCommandsProducts = db.define('juncCommandsProducts', {
    noOfProducts: DataTypes.INTEGER
}, {timestamps: true})
commands.belongsToMany(products, {through :juncCommandsProducts})
products.belongsToMany(commands, {through :juncCommandsProducts})

const juncProductsPartners = db.define('juncProductsPartners')
products.belongsToMany(partners, {through: juncProductsPartners})
partners.belongsToMany(products, {through: juncProductsPartners})

const juncProductsInstitutions =db.define('juncProductsInstitutions')
products.belongsToMany(institutions, {through: juncProductsInstitutions})
institutions.belongsToMany(products, {through: juncProductsInstitutions})

module.exports = {
    user,
    commands,
    institutions,
    partners,
    products,
    connection: db
};