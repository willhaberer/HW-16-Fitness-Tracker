const routes = require("express").Router();
const apiRoutes = require("./api");

routes.use("/api", apiRoutes);

module.exports = routes;
