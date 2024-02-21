module.exports = (sequelize,Sequelize) => {
    //pedidos e o nome da tabela
    const Pedido = sequelize.define("pedidos",{
        nome: {
            type : Sequelize.STRING
        },
        descricao:{
            type: Sequelize.STRING
        },
        valor: {
            type: Sequelize.FLOAT
        }
    })
}