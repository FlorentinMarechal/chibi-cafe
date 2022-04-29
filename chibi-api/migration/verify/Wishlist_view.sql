-- Verify chibi-api:Wishlist_view on pg

BEGIN;

SELECT * FROM "wishlist" WHERE false;

ROLLBACK;
