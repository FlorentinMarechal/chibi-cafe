-- Deploy chibi-api:constraint to pg

BEGIN;

CREATE DOMAIN "mail" AS TEXT CHECK(
    
    VALUE ~ '^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'

);

CREATE DOMAIN "password" AS TEXT CHECK(
    
    VALUE ~ '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'

);

CREATE DOMAIN "phone_number" AS TEXT CHECK(
    
    VALUE ~ '^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$'

);

CREATE DOMAIN "zip_code" AS TEXT CHECK(
    VALUE ~ '^(?!00|96|99)\d{5}$'
    
    AND VALUE !~ '[12]80$'
    
    AND VALUE !~ '^20' OR (VALUE ~ '20000|23000' OR VALUE !~ '^20[3-57-9]' )

);

-- CREATE DOMAIN "url" AS TEXT CHECK(

--     VALUE ~ '[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?'

-- );

CREATE DOMAIN "posint" AS DECIMAL CHECK(

    VALUE >= 0

);

CREATE DOMAIN "strict_posint" AS DECIMAL CHECK(

    VALUE > 0

);


COMMIT;
