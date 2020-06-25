## DEPLOY
-- Deploy arunashop:relationNtoNArticleCart to pg

BEGIN;

-- XXX Add DDLs here.
-- ------- ------- n to n

-- articles_in_card
CREATE TABLE "articles_in_card"(
    "article_id" INT NOT NULL REFERENCES "article"("id") ON DELETE CASCADE,
    "cart_id" INT NOT NULL REFERENCES "cart"("id") ON DELETE CASCADE,
    -- "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    -- "updated_at" TIMESTAMP
    PRIMARY KEY ("article_id", "cart_id")
);


COMMIT;


## REVERT

BEGIN;

-- XXX Add DDLs here.
DROP TABLE articles_in_card,
    "user",
    article,
    picture,
    cart,
    "transaction",
    comment,
    rating,
    category,
    "collection",
    category_has_picture,
    article_has_picture;

COMMIT;