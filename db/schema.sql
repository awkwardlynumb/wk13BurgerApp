drop database if exists burgers;
create database burgers;
use burgers;
create table burgers (
    id int auto_incriment,
    name varchar(50) not null,
    devoured boolean not null default 0,
    primary key (id)
);