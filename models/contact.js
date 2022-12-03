const { DataTypes, Model } = require('sequelize');
const sequelize = require('./index')

class Contact extends Model {}

Contact.init({
  // Model attributes are defined here
  currentAddress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  permanentAddress: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Contact' // We need to choose the model name
});

// the defined model is the class itself
console.log(Contact === sequelize.models.Contact); // true

module.exports = Contact;