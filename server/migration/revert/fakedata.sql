-- Revert arunashop:fakedata from pg

BEGIN;

-- XXX Add DDLs here.
-- DELETE FROM "user";
-- DELETE FROM article;
-- DELETE FROM picture;
-- DELETE FROM cart;
-- DELETE FROM "transaction";
-- DELETE FROM comment;
-- DELETE FROM rating;
-- DELETE FROM category;
-- DELETE FROM "collection";
-- DELETE FROM category_has_picture;
-- DELETE FROM article_has_picture;


COMMIT;
