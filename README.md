# README: Полное развёртывание проекта "Autovibor"

## 🔧 Требования к системе

* CPU: AMD64/АРМ
* OS: Linux/MacOS/WSL2 (Windows)
* Docker + Docker Compose
* Git
* Node.js (внутри контейнера)

## 🔹 Структура

```
project-root/
├── nuxt/                 # frontend + backend (Nuxt3 + server)
├── postgres/             # данные базы PostgreSQL (volume)
├── nginx/                # nginx config
├── .env                  # обязательно создай
├── docker-compose.development.yml
```

---

## 🔎 Первый запуск (Linux/macOS/WSL2)

### 1. Скопируй `.env-example.txt` в `.env`:

```
cp .env-example.txt .env
```

### 2. Редактируй `.env`:

```env
NODE_ENV=development
DB_DATABASE=nuxt_cms
DB_USERNAME=avtovibor
DB_PASSWORD=xc!Fhg4aQ6GJ76hGfXz1^4
DB_HOST=postgres
API_URL=http://nuxt:3000
NUXT_HOST=0.0.0.0
NUXT_PORT=3000
REDIS_LINK=redis://redis:6379
ENABLE_SEQUELIZE_LOGS=1
COMPOSE_FILE=docker-compose.${NODE_ENV}.yml
```

### 3. Запуск Docker сервисов:

```sh
docker compose -f docker-compose.development.yml up --build -d
```

Это запустит:

* PostgreSQL базу
* Redis
* Nginx
* Nuxt (frontend/backend)
* pgAdmin

### 4. Войди в Nuxt-контейнер:

```sh
docker compose exec nuxt sh
```

### 5. Установи пакеты:

```sh
npm install
```

### 6. Запусти Nuxt:

```sh
npm run dev
```

### 7. Проверь:

* Сайт: [http://localhost](http://localhost)
* Nuxt (dev): [http://localhost:3000](http://localhost:3000)

---

## 📁 База данных PostgreSQL

### Содержимое `postgres/`

Это волюм, хранящий все данные базы (`base/`, `pg_wal/`, `pg_stat/` и т.д.).

### Подключение к базе

#### 1. Через `psql`:

```sh
docker compose exec postgres psql -U avtovibor -d nuxt_cms
```

#### 2. Через pgAdmin:

* Адрес: [http://localhost:5050](http://localhost:5050)
* Email: `info@vverh.digital`
* Пароль: `BwZQXUxijMcw`
* Подключение:

  * Host: `localhost`
  * Port: `5432`
  * User: `avtovibor`
  * Password: `xc!Fhg4aQ6GJ76hGfXz1^4`
  * Database: `nuxt_cms`

#### 3. Через DBeaver:

* Создай новое PostgreSQL-подключение:

  * Host: `localhost`
  * Port: `5432`
  * Database: `nuxt_cms`
  * User: `avtovibor`
  * Password: `xc!Fhg4aQ6GJ76hGfXz1^4`

---

## 🔍 Проверка содержимого базы

```sql
\dt                     -- Список таблиц
SELECT COUNT(*) FROM users;
SELECT * FROM pages LIMIT 10;
```

---

## 🔜 Когда нет дампа БД

Если вам дали ссылку на рабочий сайт ("прод") и доступ к админке:

* Скопируй тексты, структуру меню, страницы, изображения
* Внеси их вручную в pgAdmin/DBeaver/админку
* Или попроси тех.директора дать `.sql`-дамп:

```sh
docker exec -i new_autovibor-postgres-1 psql -U avtovibor -d nuxt_cms < dump.sql
```

---

## 📃 Содержимое БД (6 таблиц):

* `users` — админы (login, password, active)
* `pages` — страницы с SEO (урл, название, постер, fields JSON)
* `components` — компоненты для сборки страниц
* `fields` — текстовые поля CMS
* `files` — загруженные файлы (filename, path, mimetype)
* `menuItems` — горизонтальное/вложенное меню

---

## 📊 Ошибки и проверки

### Проверь pgAdmin:

```yml
pgadmin:
  image: dpage/pgadmin4
  ports:
    - '5050:80'   # Обязательно
```

* Если `localhost:5050` не работает — проверь `docker ps`, убедись, что `pgadmin` запущен

```sh
docker compose ps
```

---

## 🌐 Ссылки

* [Nuxt.js](https://nuxt.com/docs)
* [PostgreSQL](https://www.postgresql.org/docs/)
* [pgAdmin4](https://www.pgadmin.org/)
* [Docker Compose](https://docs.docker.com/compose/)
