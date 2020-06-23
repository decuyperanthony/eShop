-- Deploy arunashop:fakeDataArticle to pg

BEGIN;

-- XXX Add DDLs here.
INSERT INTO "category" ("title", "color", "description") VALUES
('Argent', '#D3D3D3', 'Bijou en argent'),
('Plaqué-or', '#FFD700', 'Bijou en plaqué doré');

INSERT INTO "collection" ("name", "description") VALUES
('Ete2020', 'collection pour l ete 2020'),
('Hiver2021', 'collection pour l hiver 2021');

INSERT INTO "article" ("title", "description", "available", "stock", "price", "article_type", "collection_id", "category_id") VALUES
('Bracelet coquillage', 'Bracelet coquillage en forme de coeur', '', 19, '19.95', 'argent', 1, 1),
('Bracelet plage', 'Bracelet plage en forme de carré', '',14 , '29.95', 'plaqué-or', 2, 2);


COMMIT;
