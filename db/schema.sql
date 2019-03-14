drop table tasks

create table tasks (
id SERIAL PRIMARY KEY,
category varchar,
priority varchar,
task varchar,
info text,
complete boolean,
time TIMESTAMP
)

insert into tasks (category, priority, task, info, complete, ts) values ('Work', 'Medium', 'test', 'test2', false, now())


drop table categories

create table categories (
    id SERIAL PRIMARY KEY,
    category varchar
)

insert into categories (category) values ('Work')