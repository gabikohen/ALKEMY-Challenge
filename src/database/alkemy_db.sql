DROP DATABASE IF EXISTS alkemy_db;

CREATE DATABASE alkemy_db;
use alkemy_db;


CREATE TABLE Characters (
 

   characters_id INT  AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    age INTEGER(11) NOT  NULL,
    weight FLOAT NOT NULL,
    history  VARCHAR(350) NOT NULL,
    image LONGBLOB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    PRIMARY KEY ( characters_id)
);

INSERT INTO Characters (name) VALUES("Mickey"),("Donald Duck");

CREATE TABLE Movies (
 
   movies_id INT  AUTO_INCREMENT ,
    title  VARCHAR(50) NOT NULL,
    qualification FLOAT NOT NULL,
    create_date DATE NOT NULL,
    image LONGBLOB NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
     PRIMARY KEY ( movies_id)
);

INSERT INTO Movies (title) VALUES("Mickey Mouse"),("Donald Nephew's");

 CREATE TABLE Genres (
    genres_id INT AUTO_INCREMENT ,
    name VARCHAR(50) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    PRIMARY KEY ( genres_id)

);
     

 CREATE TABLE Users (
  users_id INT AUTO_INCREMENT ,
   email VARCHAR(100)  NOT NULL,
   password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
   PRIMARY KEY (users_id )
 );


 CREATE TABLE  Genres_Movies (
    genres_id INT NOT NULL,
	movies_id INT NOT NULL,
    created DATE NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
   FOREIGN KEY (genres_id) REFERENCES Genres(genres_id) ON DELETE CASCADE,
   FOREIGN KEY (movies_id) REFERENCES Movies(movies_id) ON DELETE CASCADE
);

  CREATE TABLE Characters_Movies (

    characters_id INT NOT NULL,
	movies_id INT NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (characters_id) REFERENCES Characters(characters_id) ON DELETE CASCADE,
    FOREIGN KEY (movies_id) REFERENCES Movies(movies_id) ON DELETE CASCADE

);


