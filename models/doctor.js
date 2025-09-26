export default (sequelize, DataTypes) => {
  const Doctor = sequelize.define("Doctor", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Doctor.associate = (models) => {
    Doctor.belongsTo(models.User, { foreignKey: "userId" });
    Doctor.belongsToMany(models.Patient, {
      through: models.Mapping,
      foreignKey: "doctorId",
    });
  };

  return Doctor;
};
