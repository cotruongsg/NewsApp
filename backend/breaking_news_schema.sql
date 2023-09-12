CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(25) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL
        CHECK (position('@' IN email) > 1),
    is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE articles (
    article_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    image TEXT NOT NULL,
    publishedAt TIMESTAMP,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE articles_collections (
    collection_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE collection_articles_rel (
    collection_id INT REFERENCES articles_collections(collection_id) ON DELETE CASCADE,
    article_id INT REFERENCES articles(article_id) ON DELETE CASCADE,
    PRIMARY KEY (collection_id, article_id)
);
