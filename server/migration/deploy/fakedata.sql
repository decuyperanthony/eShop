-- Deploy arunashop:fakedata from pg

BEGIN;

-- XXX Add DDLs here.
INSERT INTO "user" ("firstname", "lastname", "email", "password", "sexe", "birthday", "phone", "adresse1", "adresse2", "zip", "city", "country", "role") VALUES
('Kirsten', 'Johnston', 'Kirsten.Johnston56@yahoo.com','sixOneNine', 'feminin', '1981-5-7', '+33 113447693', '6324 Louis de Provence', '', '13570', 'Ponshaven', 'France', 'user'),
('Léo', 'Lucas', 'michel422.durand@gmail.com','sixOneNine', 'feminin', '1946-10-22', '+33 581313166', '02104 Antoine des Lombards', '', '75018', 'Paris', 'France', 'admin');

COMMIT;
