-- Deploy arunashop:relationNtoNArticleCart to pg

BEGIN;

-- XXX Add DDLs here.
-- ------- ------- n to n


-- CREATE TABLE "articles_in_cart"(
--     "article_id" INT NOT NULL REFERENCES "article"("id") ON DELETE CASCADE,
--     "cart_id" INT NOT NULL REFERENCES "cart"("id") ON DELETE CASCADE,
--     -- "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     -- "updated_at" TIMESTAMP
-- );


COMMIT;
