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
categoriesId int NOT NULL AUTO_INCREMENT,  
name varchar(255) NOT NULL,  
PRIMARY KEY (categoriesId)  
);

CREATE TABLE products (  
    productsId int NOT NULL AUTO_INCREMENT,  
    name varchar(255) NOT NULL,  
    price dec(10,2) UNSIGNED NOT NULL,  
    quantity int DEFAULT 0,  
    info mediumtext,  
    PRIMARY KEY (productsId),  
    categoriesId int,  
    FOREIGN KEY (categoriesId) REFERENCES categories(categoriesId)  
);

CREATE TABLE users (  
    usersId int NOT NULL AUTO_INCREMENT,  
    userName varchar(255) NOT NULL,  
    email varchar(255) NOT NULL,  
    password varchar(255) NOT NULL,  
    role varchar(255) DEFAULT "common",  
    PRIMARY KEY (usersId)  
);

CREATE TABLE carts (  
  cartsId int NOT NULL AUTO_INCREMENT,  
  totalPrice decimal(10,2) unsigned NOT NULL DEFAULT 0.00,  
  usersId int,  
  products json DEFAULT NULL,  
  PRIMARY KEY (cartsId),  
  FOREIGN KEY (usersId) REFERENCES users(usersId)   
);

CREATE TABLE orders (  
    ordersId int NOT NULL AUTO_INCREMENT,  
    totalPrice DEC(10,2) UNSIGNED DEFAULT 0,  
    products JSON,  
    usersId int,  
    name varchar(255),  
    surname varchar(255),  
    address varchar(255),  
    cAP varchar(255),  
    city varchar(255),  
    region varchar(255),  
    nation varchar(255),  
    time DATETIME DEFAULT CURRENT_TIMESTAMP,  
    PRIMARY KEY (ordersId),  
    FOREIGN KEY (usersId) REFERENCES users(usersId)  
);
"npm run dev"
