-- Deploy arunashop:domain to pg

BEGIN;

-- XXX Add DDLs here.
CREATE DOMAIN user_role AS TEXT
CHECK(
   VALUE ~ 'user'
   OR VALUE ~ 'admin'
);

CREATE DOMAIN user_sexe AS TEXT
CHECK(
   VALUE ~ 'feminin'
   OR VALUE ~ 'masculin'
);



ALTER TABLE "user" ALTER "role" TYPE user_role;
ALTER TABLE "user" ALTER "sexe" TYPE user_sexe;





COMMIT;
