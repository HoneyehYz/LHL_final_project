INSERT INTO users (username, email, password)
VALUES ('Mario', 'mario@nintendo.com', 'test'),
    ('Luigi', 'luigi@nintendo.com', 'test'),
    ('Princess', 'peach@nintendo.com', 'test'),
    ('Daisy', 'daisy@nintendo.com', 'test'),
    ('Jack', 'donkey@nintendo.com', 'test');

INSERT INTO categories (name)
VALUES ('Health'),
    ('Entertainment'),
    ('Family'),
    ('Sport'),
    ('Mental Health');

INSERT INTO goals(user_id, goal, deadline)
VALUES (1, 'Finish LHL project', '2020-12-24 11:00:00'),
    (2, 'Finish Basement', '2020-12-24 11:00:00'),
    (
        3,
        'Get A+ in Python course',
        '2020-12-24 11:00:00'
    ),
    (
        4,
        'Finish Atomic Habits Book',
        '2020-12-24 11:00:00'
    ),
    (5, 'Save 200$', '2020-12-24 11:00:00');

INSERT INTO milestones(
        user_id,
        goal_id,
        milestone,
        deadline,
        completed_at
    )
VALUES (
        1,
        1,
        'Sketch ERD',
        '2020-11-25 11:00:00',
        '2020-11-24 11:00:00'
    ),
    (
        2,
        2,
        'Buy dry walls',
        '2020-11-27 11:00:00',
        '2020-11-24 11:00:00'
    ),
    (
        3,
        3,
        'Study until video 8',
        '2020-11-24 11:00:00',
        '2020-11-24 11:00:00'
    ),
    (
        4,
        4,
        'Read untill chapter 4',
        '2020-11-23 11:00:00',
        '2020-11-24 11:00:00'
    ),
    (
        5,
        5,
        'Dont eat at restuarant',
        '2020-11-20 11:00:00',
        '2020-11-24 11:00:00'
    );

INSERT INTO messages(message, date, fromUser, toUser)
VALUES (
        'Hi, I have some technical difficulties add my milestone',
        '2020-11-18 11:00:00',
        '1',
        '2'
    ),
    (
        'I just reset your profile please try again',
        '2020-11-18 11:00:00',
        '1',
        '2'
    ),
    (
        'Hi, I have some technical difficulties add my milestone',
        '2020-11-18 11:00:00',
        '1',
        '2'
    ),
    (
        'I just reset your profile please try again',
        '2020-11-18 11:00:00',
        '1',
        '2'
    ),
    (
        'Hi, I have some technical difficulties add my milestone',
        '2020-11-18 11:00:00',
        '1',
        '2'
    );
    
INSERT INTO tasks(task, user_id, score, completed, score_date)
VALUES ('Flossing', 1, null, false, null),
    (
        'Eat healthier',
        2,
        1,
        true,
        '2020-12-19 11:00:00'
    ),
    (
        'Read 10 page book everyday',
        3,
        null,
        false,
        null
    ),
    (
        'Watch one episode of Friends',
        1,
        2,
        true,
        '2020-12-21 13:00:00'
    ),
    ('Go to sleep by 11', 3, null, false, null);