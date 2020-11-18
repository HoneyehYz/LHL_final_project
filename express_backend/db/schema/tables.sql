  DROP TABLE IF EXISTS users CASCADE;
  DROP TABLE IF EXISTS messages CASCADE;
  DROP TABLE IF EXISTS milestones CASCADE;
  DROP TABLE IF EXISTS goals CASCADE;
  DROP TABLE IF EXISTS categories CASCADE;
  DROP TABLE IF EXISTS scores CASCADE;
  DROP TABLE IF EXISTS items CASCADE;
  
  CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(30),
    password VARCHAR(70),
    email VARCHAR(30)
  );
  
  CREATE TABLE messages(
    id SERIAL PRIMARY KEY NOT NULL,
    message TEXT,
    date DATETIME,
    fromUser INTEGER REFERENCES users(id) ON DELETE CASCADE,
    toUser INTEGER REFERENCES users(id) ON DELETE CASCADE,
  );

  CREATE TABLE milestones (
    milestone_id SERIAL PRIMARY KEY NOT NULL,
    milestone VARCHAR(150),
    deadline DATETIME,
    completed_at DATETIME
  )

  CREATE TABLE goals ( 
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    goal VARCHAR(140),
    deadline DATETIME,
    milestone_id INTEGER REFERENCES milestones(milestone_id) ON DELETE CASCADE
  );

  CREATE categories (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100)
  );
  
  CREATE scores (
    score_id SERIAL PRIMARY KEY NOT NULL,
    score INTEGER,
    date DATETIME
  );

  CREATE items (
    item_id SERIAL PRIMARY KEY NOT NULL,
    item VARCHAR(100),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    score_id INTEGER REFERENCES scores(score_id) ON DELETE CASCADE,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
  )
  
  

