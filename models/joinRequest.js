module.exports = (sequelize, DataTypes) => {
  const JoinRequest = sequelize.define("JoinRequest", {
    AuthId: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false,
    },
    IndividualName: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    CorporativeName: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },

    CorporateId: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false,
    },

    StaffId: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    document: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    Status: {
      type: DataTypes.ENUM("Pending", "Approved", "Rejected"),
      defaultValue: "Pending",
    },
  });
  return JoinRequest;
};
