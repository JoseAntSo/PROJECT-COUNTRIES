const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3), // Código de tres letras
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flagImage: {
      type: DataTypes.STRING, // URL de la imagen de la bandera
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.FLOAT
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false 
  });
};