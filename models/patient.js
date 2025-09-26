export default (sequelize, DataTypes) => {
  const Patient = sequelize.define("Patient", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    disease: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Patient.associate = (models) => {
    Patient.belongsTo(models.User, { foreignKey: "userId" });
    Patient.belongsToMany(models.Doctor, {
      through: models.Mapping,
      foreignKey: "patientId",
    });
  };

  return Patient;
};
