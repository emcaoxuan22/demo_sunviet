const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../dbs'); // Đường dẫn này có thể khác tuỳ thuộc vào cấu trúc của bạn

class User extends Model {}

User.init({
  // Định nghĩa các trường của model ở đây
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'User',
});

module.exports = User;