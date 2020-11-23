DROP TABLE IF EXISTS milestones CASCADE;
CREATE TABLE milestones(
    milestone_id SERIAL PRIMARY KEY NOT NULL,
    milestone VARCHAR(100),
    deadline DATETIME,
    completed DATETIME
);