drop table tasks

create table tasks (
id SERIAL PRIMARY KEY,
category varchar,
description varchar,
info text,
complete boolean
)

insert into tasks (category, description, info, complete) values ('work', 'test', 'test2', false)