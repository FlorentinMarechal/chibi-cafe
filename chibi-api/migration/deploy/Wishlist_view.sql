-- Deploy chibi-api:Wishlist_view to pg

BEGIN;

CREATE VIEW "wishlist" AS
	SELECT "user".id AS user_id, "product".id AS product_id, "product".product_name, product_picture
	 FROM "user", "product", "user_wish_product"
	 WHERE "user".id = user_wish_product.user_id AND product.id = user_wish_product.product_id;

COMMIT;
