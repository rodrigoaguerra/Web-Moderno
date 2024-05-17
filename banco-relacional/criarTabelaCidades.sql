CREATE TABLE IF NOT EXISTS cidades (
	id INT unsigned NOT NULL auto_increment,
    nome varchar(255) NOT NULL,
    estado_id INT unsigned NOT NULL,
    area decimal(10,2),
    PRIMARY KEY (id),
    foreign key (estado_id) REFERENCES estados (id)
);

-- CREATE TABLE IF NOT exists teste (
-- 	id INT unsigned NOT NULL auto_increment primary key
-- );

-- DROP TABLE IF EXISTS teste;