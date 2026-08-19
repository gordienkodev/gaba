# Users Dashboard

Users Dashboard is a React application for working with users.

The application is located in the `dev` branch.

API: [https://dummyjson.com/users](https://dummyjson.com/users)

Documentation: [https://dummyjson.com/docs/users](https://dummyjson.com/docs/users)

## Run

Install dependencies:

```bash
npm install
```

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

For Windows (PowerShell):

```powershell
Copy-Item .env.example .env
```

Start the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## Что реализовано

В проекте сделан дашборд пользователей. Данные загружаются из DummyJSON и отображаются списком карточек. В каждой карточке показаны аватар, имя и фамилия, email и должность пользователя.

Код разделён на небольшие части, чтобы его было проще читать и поддерживать:

- `api/users.ts` отвечает за запрос к API.
- `types/user.ts` хранит типы данных пользователя и props для карточки.
- `UsersDashboard` загружает пользователей и показывает состояния загрузки или ошибки.
- `UserCard` отвечает только за отображение одного пользователя.

Стили карточки вынесены в отдельный CSS-модуль, потому что они относятся только к компоненту `UserCard`. Стили самого дашборда остались отдельно: там находится контейнер страницы и сетка карточек. Так стили компонентов не смешиваются между собой.


Mobile

<img width="375" height="667" alt="image" src="https://github.com/user-attachments/assets/d92876df-0df9-48df-9d7c-f2f2704fa4a9" />

Desktop

<img width="878" height="1141" alt="image" src="https://github.com/user-attachments/assets/00954b55-2686-4751-b8db-95e297bfa73d" />




Адрес API вынесен в `.env.example`, чтобы базовый URL можно было поменять без изменения кода.
