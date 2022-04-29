-- Deploy chibi-api:addAdressConstraint to pg

BEGIN;

ALTER TABLE "address"
    ALTER COLUMN "phone_number" TYPE "phone_number",
    ALTER COLUMN "postal_code" TYPE "zip_code";

COMMIT;
