-- create database blog
CREATE DATABASE blog;

-- use database blog
USE blog;

-- create table user
CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(40) NOT NULL,
	password VARCHAR(40) NOT NULL,
    fist_name VARCHAR(40) NULL, 
    last_name VARCHAR(40) NULL,
    created_at DATETIME NULL,
    updated_at DATETIME NULL,
    PRIMARY KEY(id)
);