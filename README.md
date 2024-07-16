# Come creare il database in locale (temporaneo)

CREATE DATABASE examplecommerce;
\use examplecommerce;
CREATE TABLE categories (
    Categoriesid int NOT NULL AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    PRIMARY KEY (Categoriesid)
);
CREATE TABLE products (
    Productsid int NOT NULL AUTO_INCREMENT,
    Name varchar(255) NOT NULL,
    Price dec(10,2) UNSIGNED NOT NULL,
    Quantity int DEFAULT 0,
    Info mediumtext,
    PRIMARY KEY (Productsid),
    Categoriesid int,
    FOREIGN KEY (Categoriesid) REFERENCES categories(Categoriesid)
);
CREATE TABLE users (
    Usersid int NOT NULL AUTO_INCREMENT,
    UserName varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    IsAdmin bool DEFAULT false,
    PRIMARY KEY (Usersid)
);
CREATE TABLE carts (
  Cartsid int NOT NULL AUTO_INCREMENT,
  TotalPrice decimal(10,2) unsigned NOT NULL DEFAULT 0.00,
  Usersid int,
  Products json DEFAULT NULL,
  PRIMARY KEY (Cartsid),
  FOREIGN KEY (Usersid) REFERENCES users(Usersid) 
);