const sql =  require('./db');

//funcao para criacao do objeto pedido
const Pedido = function(pedido) {
    this.nome_cliente = pedido.nome_cliente,
    this.descricao = pedido.descricao,
    this.valor = pedido.valor
}

//adiciona o metodo de criacao de pedido
Pedido.create = (pedido, result) => {
    //fazer validacao de pedido

    sql.query("INSERT INTO pedidos SET ?", pedido, (err,res) => {
        if(err){
            console.log('error:',err);
            result(err, null);
            return
        }

        console.log("Pedido criado com sucesso");
        console.log(res);
        result(null, {id : res.id,...pedido, data_pedido: res.data_pedido});
    })
}

//id e um number
Pedido.findById = (id,result) => {

    //valida id
    if(id.toString().match(/\d+/)[0] !== id.toString()){
        result(new Error('id invalido'),null)
    }
    
    sql.query(`SELECT * FROM pedidos WHERE id = '${id}'`, (err,res) => {
        if(err){
            console.log('error:',err);
            result(err,null);
            return;
        }
        //caso encontre mais de um id
        if(res.length){
            console.log('O foi pedido encontrado');
            console.log(res);
            console.log(res[0]);
            result(null,res[0]);
            return
        }

        result(new Error('Erro ao procurar por pedido. Multiplos indentificadores'),null);
    })
}

Pedido.getAllPedidos = (nome_cliente,result) =>{

    if(nome_cliente.match(/\w+/)[0] !== nome_cliente){
        result(new Error('nome de cliente invalido'),null)
    }

    sql.query(`SELECT * FROM pedidos WHERE nome_cliente = '${nome_cliente}'`, (err,res) => {
        if(err){
            console.log('error:',err);
            result(err,null);
            return;
        }

        console.log('Pedido(s) encontrado(s)');
        console.log(res)
        result(null,res)
        
    })
}
//data do formato : 'YYYY-MM-DD'
Pedido.getAllData = (data_pedido,result) => {
    //valida data
    if(data.match('/\d{4}-\d{2}-\d{2}/')[0] !== data){
        result(new Error('formato da data incorreto'),null)
    }

    sql.query(`SELECT * FROM pedidos WHERE data_pedido = '${data_pedido}'`, (err,res) => {
        if(err){
            console.log('error:',err);
            result(err,null);
            return;
        }

        console.log('Pedido(s) encontrado(s)');
        console.log(res)
        result(null,res)
    })
}

Pedido.updateById  = (id, pedido, result) =>{
    sql.query(
        "UPDATE pedidos SET nome_cliente = ?, descricao = ?, valor = ? WHERE id = ?",
        [pedido.nome_cliente, pedido.descricao, pedido.valor, id],
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
  
          if (res.affectedRows == 0) {
            result({ message: "pedido nao encontrado" }, null);
            return;
          }
  
          console.log("Pedido Atualizado");
          result(null, { id: id, ...pedido });
        }
    );
}

Pedido.remove = (id,result) => {
    //valida id
    if(id.toString().match(/\d+/)[0] !== id.toString()){
        result(new Error('id invalido'),null)
    }

    sql.query(`UPDATE pedidos SET deletedAt = NOW() WHERE id = '${id}'`, (err,res)=>{
        if(err){
            console.log('error:',err);
            result(err,null);
            return;
        }

        if (res.affectedRows == 0) {
            result({ message: "pedido com id informado nao encotrado" }, null);
            return;
          }
    
          console.log('pedido deletado');
          result(null, res);
    })
}

module.exports = Pedido;
