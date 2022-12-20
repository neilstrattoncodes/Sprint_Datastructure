// required modules
const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");

// Root Route for method GET
route.get("/", services.homeRoutes);

// add-games Route for method GET
route.get("/add-game", services.add_game);

// update-games Route for method GET
route.get("/update-game", services.update_game);

// API routess for post, get put and delete
route.post("/api/games", controller.create);
route.get("/api/games", controller.find);
route.put("/api/games/:id", controller.update);
route.delete("/api/games/:id", controller.delete);

//exports
module.exports = route;
