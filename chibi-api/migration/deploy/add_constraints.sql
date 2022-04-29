-- Deploy chibi-api:add_constraints to pg

BEGIN;

ALTER TABLE "user"
    ALTER COLUMN "mail" TYPE "mail",
    ALTER COLUMN "password" TYPE "password",
    ALTER COLUMN "phone_number" TYPE "phone_number",
    ALTER COLUMN "principal_postal_code" TYPE "zip_code";

ALTER TABLE "order"
    ALTER COLUMN "delivery_postal_code" TYPE "zip_code",
    ALTER COLUMN "total" TYPE "strict_posint";

-- ALTER TABLE "category"
--     ALTER COLUMN "picture" TYPE "url";

ALTER TABLE "product"
    -- ALTER COLUMN "picture" TYPE "url",
    ALTER COLUMN "price_without_taxes" TYPE "strict_posint",
    ALTER COLUMN "taxe" TYPE "strict_posint",
    ALTER COLUMN "stock" TYPE "posint";

COMMIT;
