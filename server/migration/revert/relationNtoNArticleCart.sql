BEGIN;

-- XXX Add DDLs here.
DROP TABLE
    "ligneDeCommande",
    "commande",
    "user",
    article,
    picture,
    -- "transaction",
    comment,
    rating,
    category,
    "collection",
    category_has_picture,
    article_has_picture;


COMMIT;