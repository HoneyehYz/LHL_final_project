DROP TABLE IF EXISTS milestones CASCADE;
CREATE TABLE milestones(
    milestone_id SERIAL PRIMARY KEY NOT NULL,
    milestone VARCHAR(100),
    deadline DATE,
    goal_id SERIAL FOREIGN KEY NOT NULL,
    completed Boolean
);