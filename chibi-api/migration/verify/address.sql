-- Verify chibi-api:address on pg

BEGIN;

SELECT * FROM "address" WHERE false;

ROLLBACK;
