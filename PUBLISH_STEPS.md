# Быстрая публикация на Vercel

1. Распаковать архив.
2. Открыть PowerShell в папке `dvizhenie-bez-boli`.
3. Выполнить:

```powershell
npm install
npm run dev
```

4. Проверить сайт: http://localhost:3000

5. Залить на GitHub:

```powershell
git init
git add .
git commit -m "Initial version"
git branch -M main
git remote add origin https://github.com/mike1455/dvizhenie-bez-boli.git
git push -u origin main
```

6. Открыть https://vercel.com → Add New Project → импортировать репозиторий → Deploy.

Файл `.gitignore` уже добавлен. Папки `node_modules` и `.next` в архив не включены.
