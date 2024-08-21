const { Router } = require("express");

const routes = Router()

const validResetRoutes = require("./valid.routes");
const useRoutes = require("./createUser.routes");
const sessionsRoutes = require("./sessions.routes");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

routes.use("/passwordReset", ensureAuthenticated, validResetRoutes)
// routes.use("/create", useRoutes)
routes.use("/sessions", sessionsRoutes)


module.exports = routes