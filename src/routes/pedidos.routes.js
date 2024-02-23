module.exports = app => {
    const pedidos = require("../controllers/pedido.controller");

    var router = require("express").Router();

    router.post("/", pedidos.create);
    router.get("/all/:nome", pedidos.findAll);
    router.get("/one/:id", pedidos.findOne);
    router.put("/:id", pedidos.update);
    router.delete("/:id", pedidos.delete);

    app.use('/api', router);
};