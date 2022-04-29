-- Revert chibi-api:add_constraints from pg

BEGIN;

ALTER TABLE "product"
    -- ALTER COLUMN "picture" TYPE TEXT,
    ALTER COLUMN "price_without_taxes" TYPE INT,
    ALTER COLUMN "taxe" TYPE INT,
    ALTER COLUMN "stock" TYPE INT;

-- ALTER TABLE "category"
--     ALTER COLUMN "picture" TYPE TEXT;

ALTER TABLE "order"
    ALTER COLUMN "delivery_postal_code" TYPE TEXT,
    ALTER COLUMN "total" TYPE INT;
ALTER TABLE "user"
    ALTER COLUMN "mail" TYPE TEXT,
    ALTER COLUMN "password" TYPE TEXT,
    ALTER COLUMN "phone_number" TYPE TEXT,
    ALTER COLUMN "principal_postal_code" TYPE TEXT;

COMMIT;
