DROP DATABASE IF EXISTS deliveries;

CREATE DATABASE deliveries;

USE deliveries;

CREATE TABLE deliver (
  id int NOT NULL AUTO_INCREMENT,
  dates integer NOT NULL,
  times integer(50) NOT NULL,
  PRIMARY KEY (ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
