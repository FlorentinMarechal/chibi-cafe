-- Revert chibi-api:addAdressConstraint from pg

BEGIN;

ALTER TABLE "address"
    ALTER COLUMN "phone_number" TYPE TEXT,
    ALTER COLUMN "postal_code" TYPE TEXT;

COMMIT;
