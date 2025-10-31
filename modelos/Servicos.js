const { DataTypes } = require("sequelize");
const sequelize = require("../dataBase.js");

const Servicos = sequelize.define("Servicos", {
  nome: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  prazo: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  tipoAtendimento: {
    type: DataTypes.ENUM("Presencial", "Online", "Híbrido"),
    allowNull: true,
  },
  endereco: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = Servicos;
