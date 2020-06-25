-- Revert arunashop:domain from pg

BEGIN;

-- XXX Add DDLs here.

-- ALTER TABLE "user" ALTER "role" TYPE text;
-- ALTER TABLE "user" ALTER "sexe" TYPE text;

DROP DOMAIN user_role;
DROP DOMAIN user_sexe;

COMMIT;
