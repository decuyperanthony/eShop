-- Deploy arunashop:tables to pg

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE "collection"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "description" TEXT,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

CREATE TABLE "category"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL UNIQUE,
    "color" TEXT, -- FORMAT : #ffffff
    "description" TEXT,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

CREATE TABLE "user"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" TEXT,
    "lastname" TEXT,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "sexe" TEXT,
    "birthday" DATE,
    "phone" TEXT,
    "adresse1" TEXT,
    "adresse2" TEXT,
    "zip" TEXT,
    "city" TEXT,
    "country" TEXT,
    "role" TEXT NOT NULL, -- DOMAINE A CREER // user admin
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

CREATE TABLE "article"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL UNIQUE,
    "description" TEXT NOT NULL,
    "available" TEXT,-- DOMAINE A CREER 'disponible' 'not disponible'"
    "stock" INT,
    "price" MONEY,
    "article_type" TEXT,
    "collection_id" INT NOT NULL REFERENCES "collection"("id"),
    "category_id" INT NOT NULL REFERENCES "category"("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

CREATE TABLE "picture"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "path" TEXT,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

CREATE TABLE "cart"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "quantity" INT,
    "article_id" INT NOT NULL,
    "user_id" INT NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

CREATE TABLE "transaction"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "quantity" INT NOT NULL,
    "article_id" INT NOT NULL,
    "user_id" INT NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

CREATE TABLE "comment"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT,
    "description" TEXT NOT NULL,
    "article_id" INT NOT NULL,
    "user_id" INT NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

CREATE TABLE "rating"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "value" INT,
    "article_id" INT NOT NULL,
    "user_id" INT NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);


-- ------- ------- n to n
-- category_has_picture
CREATE TABLE "category_has_picture"(
    "category_id" INT NOT NULL REFERENCES "category"("id") ON DELETE CASCADE,
    "picture_id" INT NOT NULL REFERENCES "picture"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);

-- picture_has_article
CREATE TABLE "article_has_picture"(
    "article_id" INT NOT NULL REFERENCES "article"("id") ON DELETE CASCADE,
    "picture_id" INT NOT NULL REFERENCES "picture"("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP
);



COMMIT;
