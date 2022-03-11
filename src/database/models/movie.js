module.exports = (sequelize, DataTypes) => {
  // el nombre sequelize va llamar la tabla
  let alias = "Movie";

  let cols = {
    movies_id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull:false,
    },

    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },

    qualification: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    created: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
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
    tableName: "movies",
    paranoid: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  };

  const Movie = sequelize.define(alias, cols, config);

  Movie.associate = function (models) {
    Movie.belongsToMany(models.Character, {
   
      through: "Characters_Movies",
     
    });

    Movie.belongsTo(models.Genre, {
    
      through: "Genres_Movies",
 
    });
  };
  return Movie;
};
