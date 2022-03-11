module.exports = (sequelize, DataTypes) => {
  let alias = "Character";

  let cols = {
    characters_id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull:false,
    },

    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    age: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },

    weight: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },

    history: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING(250),
      allowNull: true,
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
    tableName: "characters",
    paranoid: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  };

  const  Character = sequelize.define(alias, cols, config);

  Character.associate = function (models) {
    Character.belongsToMany(models.Movie, {
     
      through: "Characters_Movies",
    
    });

   
  };
  return Character;
};
