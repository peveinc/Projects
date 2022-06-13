const Express = require("express");
const routes = Express.Router()
const controller = require("../controllers/controllers")
routes.post("/add-user", controller.postData)






module.exports = routes