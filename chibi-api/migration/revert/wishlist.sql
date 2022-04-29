-- Revert chibi-api:wishlist from pg

BEGIN;

DROP TABLE "user_wish_product";

COMMIT;
