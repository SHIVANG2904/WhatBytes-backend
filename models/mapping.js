export default (sequelize, DataTypes) => {
  const Mapping = sequelize.define("Mapping", {
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Mapping.associate = (models) => {
    Mapping.belongsTo(models.Patient, { foreignKey: "patientId" });
    Mapping.belongsTo(models.Doctor, { foreignKey: "doctorId" });
  };

  return Mapping;
};
