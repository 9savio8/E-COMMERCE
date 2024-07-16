# Project Work E-COMMERCE

To install packages dependecies, run 

"npm i"

To start, run 

"npm run start"

To start in dev environment, run 

"npm run dev"


## Come creare il database in locale (temporaneo)

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

CREATE TABLE orders (  
    Ordersid int NOT NULL AUTO_INCREMENT,  
    TotalPrice DEC(10,2) UNSIGNED DEFAULT 0,  
    Products JSON,  
    Usersid int,  
    Name varchar(255),  
    Surname varchar(255),  
    Address varchar(255),  
    CAP varchar(255),  
    City varchar(255),  
    Region varchar(255),  
    Nation varchar(255),  
    Time DATETIME DEFAULT CURRENT_TIMESTAMP,  
    PRIMARY KEY (Ordersid),  
    FOREIGN KEY (Usersid) REFERENCES users(Usersid)  
);