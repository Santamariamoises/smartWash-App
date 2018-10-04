DROP DATABASE IF EXISTS smartWash;

CREATE DATABASE smartWash;

USE smartWash;

CREATE TABLE orders(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  address varchar(100) NOT NULL,
  email varchar(50) NOT NULL,
  phone varchar(10) NOT NULL,
  pick up varchar(10) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

INSERT INTO orders  (name, lastname, address, email,phone) VALUES(John,Lopez,77 toledo,jolo@gmail.com,5573589699);
