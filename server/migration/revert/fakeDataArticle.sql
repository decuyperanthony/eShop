-- Revert arunashop:fakeDataArticle from pg

BEGIN;

-- XXX Add DDLs here.
-- DELETE FROM article;
-- DELETE FROM category;
-- DELETE FROM "collection";
-- DELETE FROM rating;
-- DELETE FROM comment;
-- DELETE FROM "user";

-- DELETE FROM picture;
-- DELETE FROM cart;
-- DELETE FROM "transaction";
-- DELETE FROM category_has_picture;
-- DELETE FROM article_has_picture;

COMMIT;
