module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define("Document", {
    AuthId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    document: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },

    name: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    staffName: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
   
    status: {
      type: DataTypes.ENUM("Not Verified", "Verified"),
      defaultValue: "Not Verified",
    },
    CorporateId: {
      type: DataTypes.INTEGER
    }
  });
  return Document;
};
