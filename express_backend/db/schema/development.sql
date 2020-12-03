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
INSERT INTO scores (score, date) 
VALUES
    ('0', '2020-11-24 11:00:00'),
    ('0.5', '2020-11-25 11:00:00'),
    ('1','2020-11-26 11:00:00'),
    ('0.5','2020-11-27 11:00:00'),
    ('0.5', '2020-11-30 11:00:00');


INSERT INTO
milestones(milestone, deadline, completed_at) 
VALUES
    ('Sketch ERD', '2020-11-25 11:00:00', '2020-11-24 11:00:00'),
    ('Buy dry walls', '2020-11-27 11:00:00', '2020-11-24 11:00:00'),
    ('Study until video 8', '2020-11-24 11:00:00', '2020-11-24 11:00:00'),
    ('Read untill chapter 4', '2020-11-23 11:00:00', '2020-11-24 11:00:00'),
    ('Dont eat at restuarant', '2020-11-20 11:00:00', '2020-11-24 11:00:00');


INSERT INTO
goals(user_id, goal, deadline, milestone_id)
VALUES
    ('1', 'Finish LHL project','2020-12-24 11:00:00', '1'),
    ('2', 'Finish Basement', '2020-12-24 11:00:00' , '2'),
    (
        '3',
        'Get A+ in Python course','2020-12-24 11:00:00' ,
        '3'
    ),
    (
        '4',
        'Finish Atomic Habits Book', '2020-12-24 11:00:00' ,
        '4'
    ),
    ('5', 'Save 200$', '2020-12-24 11:00:00' ,'5');

INSERT INTO
messages(message, date, fromUser, toUser)
VALUES
    ('Hi, I have some technical difficulties add my milestone', '2020-11-18 11:00:00', '1', '2'),
    ('I just reset your profile please try again', '2020-11-18 11:00:00', '1', '2'),
    ('Hi, I have some technical difficulties add my milestone', '2020-11-18 11:00:00', '1', '2'),
    ('I just reset your profile please try again', '2020-11-18 11:00:00', '1', '2'),
    ('Hi, I have some technical difficulties add my milestone', '2020-11-18 11:00:00', '1', '2');

INSERT INTO
items(item, user_id, score_id, category_id) 
VALUES
    ('Flossing', '1', '1','1'),
    ('Eat healthier', '2', '2','1'),
    ('Read 10 page book everyday', '3', '3','2'),
    ('Watch one episode of Friends', '4', '2','2'),
    ('Go to sleep by 11', '3', '2','1');




  