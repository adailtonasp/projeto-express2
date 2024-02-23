const Pedido = require('../models/pedido.models')

exports.create = (req,res) => {

    if(!req.body){
        res.status(400).send({
            message: "body nao pode ser vazio"
        })
        return
    }

    const pedido = new Pedido({
        nome_cliente: req.body.nome_cliente,
        descricao : req.body.descricao,
        valor: req.body.valor,
        
    })

    Pedido.create(pedido, (err,data) => {
        if(err){
            res.status(500).send({
                message : err.message || "Erro ao criar pedido"
            })
        }else{
            res.send(data)
        }
    })
}

exports.findAll = (req,res) =>{
    if(!req.params){
        res.status(400).send({
            message: "nome nao pode ser vazio"
        })
        return
    }

    Pedido.getAllPedidos(req.params.nome, (err,data) =>{
        if(err){
            res.status(500).send({
                message:
                  err.message || "Erro ao pesquisar pedido por nome"
              });
        }else{
            res.send(data)
        }
    })
}

exports.findOne = (req,res) =>{
    if(!req.params.id){
        res.status(400).send({
            message: "id nao pode ser vazio"
        })
        return
    }

    Pedido.findById(req.params.id,(err,data) => {
        if (err) {
            res.status(500).send({
                message:
                  err.message || "Erro ao pesquisar cliente por id"
              });
            return
            
        } else res.send(data);
    });
}

exports.update = (req,res) => {
    if (!req.body || !req.params) {
        res.status(400).send({
          message: "body e id nao podem ser vazios"
        });
        return;
    }
    
      console.log(req.body);
    
      Pedido.updateById(
        req.params.id,
        new Pedido(req.body),
        (err, data) => {
          if (err) {
            res.status(500).send({
                message: 'Nao foi possivel atualizar o pedido'
            })
          } else {
            res.send(data);
             }
        }
      );
}

exports.delete = (req, res) => {
    if(!req.params.id){
        res.status(400).send({
            message: "id nao pode ser vazio"
          });
          return;
    }
    Pedido.remove(req.params.id, (err, data) => {
      if (err) {
        res.send(500).send('Nao foi possivel excluir o pedido')

      } else {
        res.send({ message: 'Pedido excluido com sucesso' })
      };
    });
  };
  