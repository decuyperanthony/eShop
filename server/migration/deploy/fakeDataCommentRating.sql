-- Deploy arunashop:fakeDataCommentRating to pg

BEGIN;

-- XXX Add DDLs here.
INSERT INTO "rating" ("value", "article_id", "user_id") VALUES
(5, 1, 2),
(4, 2, 1),
(5, 2, 2),
(4, 1, 1);

INSERT INTO "comment" ("title", "description", "article_id", "user_id") VALUES
('title1', 'description1', 2, 2),
('title2', 'description2', 1, 2),
('title3', 'description3', 1, 1);


COMMIT;
