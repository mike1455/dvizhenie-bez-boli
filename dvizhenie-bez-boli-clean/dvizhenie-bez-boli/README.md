# Движение без боли — Next.js MVP

Стартовый сайт проекта «Движение без боли».

## Что внутри

- Главная страница
- Библиотека боли
- Страницы: шея, спина, головная боль
- Страница видео
- Страница «О Соне»
- Фото Сони: `public/images/sonya.png`
- Заготовка Decap CMS: `public/admin`

## Локальный запуск

```bash
npm install
npm run dev
```

Открыть: http://localhost:3000

## Публикация через GitHub + Vercel

```bash
git init
git add .
git commit -m "Initial version"
git branch -M main
git remote add origin https://github.com/mike1455/dvizhenie-bez-boli.git
git push -u origin main
```

Дальше зайти на https://vercel.com → Add New Project → выбрать репозиторий → Deploy.

## Важно

Не добавляйте в Git папки `node_modules`, `.next`, `out`. Они уже указаны в `.gitignore`.
