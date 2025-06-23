CREATE SCHEMA "foodApp" ;


CREATE TABLE "restaurants" (
  "id" int NOT NULL AUTO_INCREMENT,
  "name" varchar(45) NOT NULL,
  "description" varchar(100) DEFAULT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "id_UNIQUE" ("id"),
  UNIQUE KEY "name_UNIQUE" ("name"),
  UNIQUE KEY "description_UNIQUE" ("description")
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE "resturant_availability" (
  "id" int NOT NULL AUTO_INCREMENT,
  "restaurant_id" int NOT NULL,
  "schedule_time" datetime NOT NULL,
  "reserved" tinyint NOT NULL DEFAULT '0',
  "reserved_by" varchar(45) DEFAULT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "id_UNIQUE" ("id"),
  KEY "resturant_id_idx" ("restaurant_id"),
  CONSTRAINT "resturant_id" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants" ("id")
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*
-- Query: SELECT * FROM foodApp.restaurants
LIMIT 0, 1000

-- Date: 2023-06-19 11:57
*/
INSERT INTO "" ("id","name","description") VALUES (1,'La Casca','Consumo en el lugar · Terraza o mesas al aire libre · Retiro desde el coche');
INSERT INTO "" ("id","name","description") VALUES (2,'Portal de las carnes','Disfrute de las mejores carnes y vinos en un ambiente único de la ciudad de San Pedro Sula.\n');
INSERT INTO "" ("id","name","description") VALUES (3,'Factory Steak & Lobster\n','Experience the best steak and lobster in San Pedro Sula at Factory Steak and Lobster');


/*
-- Query: SELECT * FROM foodApp.resturant_availability
LIMIT 0, 1000

-- Date: 2023-06-19 11:59
*/
INSERT INTO "" ("id","restaurant_id","schedule_time","reserved","reserved_by") VALUES (1,1,'2023-06-20 08:00:00',0,NULL);
INSERT INTO "" ("id","restaurant_id","schedule_time","reserved","reserved_by") VALUES (2,1,'2023-06-20 09:00:00',0,NULL);
INSERT INTO "" ("id","restaurant_id","schedule_time","reserved","reserved_by") VALUES (3,2,'2023-06-21 10:00:00',0,NULL);
INSERT INTO "" ("id","restaurant_id","schedule_time","reserved","reserved_by") VALUES (4,2,'2023-06-21 11:00:00',0,NULL);
INSERT INTO "" ("id","restaurant_id","schedule_time","reserved","reserved_by") VALUES (5,3,'2023-06-22 07:00:00',0,NULL);
INSERT INTO "" ("id","restaurant_id","schedule_time","reserved","reserved_by") VALUES (6,3,'2023-06-22 09:00:00',0,NULL);
INSERT INTO "" ("id","restaurant_id","schedule_time","reserved","reserved_by") VALUES (7,1,'2021-06-20 08:00:00',0,NULL);

