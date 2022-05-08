DROP DATABASE IF EXISTS riddle_me_this_db;

CREATE DATABASE riddle_me_this_db;

CREATE TABLE riddles(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
  questions VARCHAR(30) NOT NULL,
  answers VARCHAR(30) NOT NULL,
  industry_connected BOOLEAN NOT NULL
);
