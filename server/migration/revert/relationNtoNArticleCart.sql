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