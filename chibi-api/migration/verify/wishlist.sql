-- Verify chibi-api:wishlist on pg

BEGIN;

SELECT * FROM "user_wish_product" WHERE false;

ROLLBACK;
