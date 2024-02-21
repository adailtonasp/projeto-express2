const db = require('../models')

const pedidoDB = db.pedidos;

const op = db.sequelize.Op;

exports.create = (req,res) => {
    if(!req.body.nome || !req.body.descricao || !req.body.valor){
        res.status(400).send({
            message : 'Verifique os valores preenchidos'
        })
    }

    const pedido = {
        nome : req.body.nome,
        descricao: req.body.descricao,
        valor: req.body.valor
    }
    
    pedidoDB.create(pedido)
        .then(data => {
            res.send(data)
        })

    return;
}

