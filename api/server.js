const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, 'config/config.env') })
const express = require("express")
const sequelize = require("./db")

const PORT = process.env.PORT || 5000

const app = express();

const start = async function(){
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT)
    }catch (e) {
    }
}

start()
