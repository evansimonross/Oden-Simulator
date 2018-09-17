DROP DATABASE IF EXISTS oden_db;
CREATE DATABASE oden_db;
USE oden_db;

CREATE TABLE ingredients (
    id INTEGER AUTO_INCREMENT,
    type_id INTEGER NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE types (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    -- image VARCHAR(255),
    PRIMARY KEY (id)
);