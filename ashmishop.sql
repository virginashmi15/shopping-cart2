create database ashmishop; 
use ashmishop;
Create table user(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name varchar(40),
    email varchar(40),
    pass varchar(40)
);

create table products(
	id int unsigned auto_increment primary key,
    product_name varchar(40),
	price float,
    product_detials varchar(255)
);

create table total(
	id int unsigned auto_increment primary key,
	user_id varchar(40),
	product_id int,
    product_name varchar(30)
);

create table cart(
	id int unsigned auto_increment primary key,
    user_id int,
    product_id int
);

insert into products (product_name,price) values ("painting1",700);
insert into products (product_name,price) values ("painting2",500);
insert into products (product_name,price) values ("painting3",300);
insert into products (product_name,price) values ("painting4",500);
insert into products (product_name,price) values ("painting5",200);



insert into user (name,email,pass) values ('swetha','swetha@mail.com','123');
insert into user (name,email,pass) values ('nivetha','nivetha@mail.com','123');
insert into user (name,email,pass) values ('anusha','anusha@mail.com','123');


