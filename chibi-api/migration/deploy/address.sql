-- Deploy chibi-api:address to pg

BEGIN;

CREATE TABLE "address" (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "street_number" TEXT NOT NULL,
    "name_of_the_road" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "user_id" INT REFERENCES "user"(id) ON DELETE CASCADE NOT NULL
);

COMMIT;
