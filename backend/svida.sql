DROP DATABASE IF EXISTS nucleo;

CREATE DATABASE IF NOT EXISTS nucleo;

USE nucleo;

CREATE TABLE user (
  Correo VARCHAR(40) PRIMARY KEY,
  Nombre VARCHAR(30) NOT NULL,
  Apellido_paterno VARCHAR (30) NOT NULL,
  Apellido_materno VARCHAR (30) NOT NULL,
  Password CHAR(32) NOT NULL
);

CREATE TABLE vivero_militar_info (
  id_militar_info INT(5) PRIMARY KEY AUTO_INCREMENT,
  Nombre_planta VARCHAR(30) NOT NULL,
  Territorio VARCHAR(30),
  Folio_dgipa CHAR(11)
);

CREATE TABLE viveros (
  id_vivero INT(5) PRIMARY KEY AUTO_INCREMENT,
  Tipo VARCHAR(30) NOT NULL
);

CREATE TABLE cac (
  id_cac INT(5) PRIMARY KEY AUTO_INCREMENT,
  Cac VARCHAR(30),
  Ubicacion VARCHAR(30) NOT NULL,
  Tipo INT(5) NOT NULL,
  FOREIGN KEY (Tipo) REFERENCES viveros(id_vivero)
);



CREATE TABLE arboles (
  id_arbol INT(5) PRIMARY KEY AUTO_INCREMENT,
  Planta VARCHAR(20) NOT NULL,
  Ncientifico VARCHAR(50) NOT NULL,
  Categoria ENUM("Forestal", "Frutal", "Agroindustrial") NOT NULL,
  Cac INT(5) NOT NULL,
  Perfil VARCHAR(50) DEFAULT 'perfil/arbolDefault.svg',
  Alt VARCHAR(30) DEFAULT "arbolDefault",
  FOREIGN KEY (Cac) REFERENCES Cac(id_cac)
);

CREATE TABLE detalles (
  id_detalle INT(5) PRIMARY KEY AUTO_INCREMENT,
  /*La fase 0 significa en germinación y la fase 1 significa que la planta esta en crecimiento*/
  Fase ENUM("0", "1") DEFAULT "0",
  Vivero INT(5) DEFAULT "1",
  id_arbol INT(5) NOT NULL,
  Planta_viva INT(5) NOT NULL,
  Planta_sembrada INT(5) NOT NULL,
  Planta_muerta INT(5) DEFAULT "0",
  Planta_repartida INT(5) DEFAULT "0",
  Fecha_siembra DATE NOT NULL,
  Fecha_repartida DATE,
  Ultima_actualizacion DATETIME NOT NULL,
  FOREIGN KEY (Vivero) REFERENCES viveros(id_vivero),
  FOREIGN KEY (id_arbol) REFERENCES arboles(id_arbol)
);

INSERT INTO user (Correo, Nombre, Apellido_paterno, Apellido_materno, Password) VALUES ("luis@gmail.com", "Jose Luis", "Cabrera", "Aguirre", MD5("73d9fd04b5"));

INSERT INTO viveros (Tipo) VALUES ('Comunitario'), ('Militar');

INSERT INTO vivero_militar_info (Nombre_planta, Territorio, Folio_dgipa) VALUES 
('Tinto', 'Balancan', 'VMBAL019BAL'),
('Tinto', 'Tenosique', 'VMTEN019BAL');

INSERT INTO cac (Cac, Ubicacion, Tipo) VALUES 
('Prosperidad', "El cuyo", "1"), 
('Venado',"El cuyo", "1");

INSERT INTO arboles (Planta, Ncientifico, Categoria, Cac) VALUES
("Tinto", "Heamatoxi Campechianum","Forestal", "1"),
("Tinto", "Heamatoxi Campechianum","Forestal", "2"),
("Maculis", "paluroseu","Forestal", "1"),
("Maculis", "paluroseu","Forestal", "2");

INSERT INTO detalles (id_arbol, Vivero,  Fase, Planta_viva, Planta_sembrada, Planta_muerta, Fecha_siembra, Ultima_actualizacion) VALUES
("1", "1", "1", "350", "400", "50", "2021-07-18", CURRENT_TIME),
("3", "1", "1", "550", "600", "50", "2021-07-18", CURRENT_TIME),
("4", "1", "1", "850", "900", "50", "2021-07-18", CURRENT_TIME),
("2", "1", "1", "150", "200", "50", "2021-07-18", CURRENT_TIME),
("1", "1", "1", "950", "1000", "50", "2021-07-18", CURRENT_TIME),
("2", "1", "1", "250", "300", "50", "2021-07-18", CURRENT_TIME),
("3", "1", "1", "10", "60", "50", "2021-07-18", CURRENT_TIME);


/* SELECT det.id_detalle, det.Planta_viva, viv.Tipo, det.Planta_sembrada, det.Planta_repartida, det.Planta_muerta, det.Fecha_siembra, det.Fecha_repartida, det.Ultima_actualizacion, cac.Cac, arb.Planta FROM detalles AS det INNER JOIN arboles AS arb INNER JOIN cac AS cac INNER JOIN viveros as viv ON det.id_arbol = arb.id_arbol AND cac.id_cac = arb.cac AND cac.Tipo = viv.id_vivero; */

/*Select para obtener el total de plantas de cada arbol por el nombre de cac*/
/*SELECT arb.id_arbol, arb.Planta, arb.Ncientifico, arb.Categoria, arb.Perfil, SUM(det.Planta_viva) as planta, cac.cac FROM arboles AS arb INNER JOIN detalles AS det INNER JOIN cac AS cac ON det.id_arbol = arb.id_arbol AND arb.cac = cac.id_cac WHERE arb.Cac = 2 GROUP BY (ARB.id_arbol)*/