module.exports = (sequelize, DataTypes) => {
  let alias = "User";
  let cols = {
    users_id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull:false,
    },

    email: {
      type: DataTypes.STRING(250),
      unique:true,
      allowNull: false,
      validate:{
        isEmail:{
           msg:'Invalid email address. Please try again.'
        }
      }
    },

    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate:{
        len:{
            arg:[6,255],
            msg:'The password must have at least 6 characters'
        }
      }
    },
    created_at: {
      type: DataTypes.DATE,
    },

    updated_at: {
      type: DataTypes.DATE,
    },

    deleted_at: {
      type: DataTypes.DATE,
    },


    
  };
  let config = {
    tableName: "users",
    paranoid: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",

  };

 const user = sequelize.define(alias, cols, config);

  return user;
};
