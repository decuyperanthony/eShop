-- Deploy arunashop:domain to pg

BEGIN;

-- XXX Add DDLs here.
-- je crée 2 domaines
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


-- j'attache mes 2 domaines
ALTER TABLE "user" ALTER "role" TYPE user_role;
ALTER TABLE "user" ALTER "sexe" TYPE user_sexe;





COMMIT;
