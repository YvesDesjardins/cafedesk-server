module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING,
    rated: DataTypes.BOOLEAN,
  }, {});
  // Tag.associate = (models) => {
  //   // associations can be defined here
  //   Tag.belongsTo(models.Business);
  //   Tag.belongsTo(models.User);
  // };
  return Tag;
};
