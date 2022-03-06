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
      allowNull: false,
    },

    qualification: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    create_date: {
      type: DataTypes.DATE,
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

  const movie = sequelize.define(alias, cols, config);

  movie.associate = function (models) {
    movie.belongsToMany(models.Character, {
      as: "characters",
      through: "Characters_Movies",
      foreingKey: "movies_id",
    });

    movie.belongsTo(models.Genre, {
      as: "genres",
      through: "Genres_Movies",
      foreingKey: "genres_id",
    });
  };
  return movie;
};
