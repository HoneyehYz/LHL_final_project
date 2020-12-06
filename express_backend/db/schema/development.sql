INSERT INTO users (username, email, password)
VALUES
    ('Mario', 'mario@nintendo.com', 'test'),
    ('Luigi', 'luigi@nintendo.com', 'test'),
    ('Princess', 'peach@nintendo.com','test'),
    ( 'Daisy','daisy@nintendo.com','test'),
    ('Jack', 'donkey@nintendo.com', 'test');


INSERT INTO categories (name) 
VALUES
    ('Health'),
    ('Entertainment'),
    ('Family'),
    ('Sport'),
    ('Mental Health');


INSERT INTO
milestones(milestone, deadline, completed, goal_id, user_id) 
VALUES
    ('Sketch ERD', '2020-11-25', false, 1, 1),
    ('Wireframe', '2020-11-27', false, 1, 1),
    ('Chapter 1', '2020-12-01', false, 1, 1);


INSERT INTO
goals(user_id, goal, deadline)
VALUES
    ('1', 'Finish LHL project','2020-12-04'),
    ('1', 'Read a book', '2020-12-25');


INSERT INTO
messages(message, date, fromUser, toUser)
VALUES
    ('Hi, I have some technical difficulties add my milestone', '2020-11-18 11:00:00', '1', '2'),
    ('I just reset your profile please try again', '2020-11-18 11:00:00', '1', '2'),
    ('Hi, I have some technical difficulties add my milestone', '2020-11-18 11:00:00', '1', '2'),
    ('I just reset your profile please try again', '2020-11-18 11:00:00', '1', '2'),
    ('Hi, I have some technical difficulties add my milestone', '2020-11-18 11:00:00', '1', '2');

INSERT INTO
tasks(task, user_id, score, completed, score_date) 
VALUES
    ('Flossing', 1, null, false, null),
    ('Eat healthier', 2, 1, true, '2020-12-19 11:00:00'),
    ('Read 10 page book everyday', 3, null, false, null),
    ('Watch one episode of Friends', 1, 2, true, '2020-12-21 13:00:00'),
    ('Go to sleep by 11', 3, null, false, null);




  