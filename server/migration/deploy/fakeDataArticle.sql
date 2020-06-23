-- Deploy arunashop:fakeDataArticle to pg

BEGIN;

-- XXX Add DDLs here.
INSERT INTO "article" ("title", "description", "available", "stock", "price", "article_type", "collection_id", "category_id") VALUES
('Bracelet coquillage', 'Bracelet coquillage en forme de coeur', '',19 , '19.95', 'argent', 0, 0),
('Bracelet plage', 'Bracelet plage en forme de carré', '',14 , '29.95', 'plaqué-or', 0, 0);


COMMIT;
