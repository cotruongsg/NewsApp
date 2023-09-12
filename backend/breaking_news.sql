\echo 'Delete and recreate breaking_news db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE breaking_news;
CREATE DATABASE breaking_news;
\connect breaking_news


\i breaking_news_schema.sql
\i breaking_news_seed.sql

\echo 'Delete and recreate breaking_news_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE breaking_news_test;
CREATE DATABASE breaking_news_test;
\connect breaking_news_test

\i breaking_news_schema.sql
