-- public.transactions definition

-- Drop table

-- DROP TABLE public.transactions;

CREATE TABLE public.transactions (
	origin text NOT NULL,
	request_number int4 NOT NULL,
	quote_number int4 NOT NULL,
	amount int8 NOT NULL,
	destination text NOT NULL,
	expiry int4 NOT NULL,
	fulfilled bool DEFAULT false NOT NULL,
	CONSTRAINT transactions_pk PRIMARY KEY (origin, request_number, quote_number)
);