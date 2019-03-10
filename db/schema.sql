drop table tasks

create table tasks (
id SERIAL PRIMARY KEY,
category varchar,
priority varchar,
task varchar,
info text,
complete boolean
)

insert into tasks (category, priority, task, info, complete) values ('Work', 'Medium', 'test', 'test2', false)