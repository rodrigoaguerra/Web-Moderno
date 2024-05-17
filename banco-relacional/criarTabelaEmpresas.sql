CREATE TABLE IF NOT EXISTS empresas (
	id INT unsigned NOT NULL auto_increment,
    nome varchar(255) NOT NULL,
    cnpj int unsigned,
    primary key (id),
    unique key (cnpj)
);

-- cidades_empresas
CREATE TABLE IF NOT EXISTS empresas_unidades (
	empresa_id int unsigned not null,
    cidade_id int unsigned not null,
    sede tinyint(1) not null,
    primary key (empresa_id, cidade_id)
)