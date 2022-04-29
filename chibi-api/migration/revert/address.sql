-- Revert chibi-api:address from pg

BEGIN;

DROP TABLE "address";

COMMIT;
