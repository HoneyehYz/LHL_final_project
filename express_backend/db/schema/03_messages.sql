DROP TABLE IF EXISTS messages CASCADE;
CREATE TABLE messages(
    chat_id SERIAL PRIMARY KEY NOT NULL,
    message TEXT,
    date DATE,
    user_id SERIAL FOREIGN KEY NOT NULL
);