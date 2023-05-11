## Описание

После устанвоки фреймворка [Nest](https://github.com/nestjs/nest) были установлены следующие пакеты:

```bash
npm install typeorm --save
npm install reflect-metadata --save
npm install pg --save
npm install @nestjs/typeorm typeorm --save 
npm install @nestjs/config --save
npm install cross-env --save
npm install @nestjs/serve-static --save 
npm install class-validator --save
```


Таблица в бд Postgres

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    name character varying(80) COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp without time zone NOT NULL DEFAULT now(),
    "deletedAt" timestamp without time zone,
    "isDeleted" boolean NOT NULL DEFAULT true,
    CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id)
)
