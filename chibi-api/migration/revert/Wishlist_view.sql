-- Revert chibi-api:Wishlist_view from pg

BEGIN;

DROP VIEW wishlist;

COMMIT;
