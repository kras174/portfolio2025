# 🚀 GitHub Pages Setup Instructions

## Автоматическая настройка (GitHub Actions)

### Шаг 1: Включить GitHub Pages

1. Перейдите в ваш репозиторий на GitHub
2. Нажмите **Settings** (вкладка настроек)
3. В левом меню найдите **Pages**
4. В разделе **Source** выберите:
   - **Deploy from a branch**
   - **Branch**: `gh-pages` (создастся автоматически)
   - **Folder**: `/ (root)`
5. Нажмите **Save**

### Шаг 2: Проверить Actions

1. Перейдите во вкладку **Actions**
2. Вы должны увидеть workflow "Deploy to GitHub Pages"
3. Если workflow не запустился автоматически, нажмите **Run workflow**

### Шаг 3: Настройка прав доступа

Если Actions не работают, проверьте права:

1. В **Settings** → **Actions** → **General**
2. Убедитесь, что **Actions permissions** установлены в **Allow all actions and reusable workflows**
3. В **Workflow permissions** выберите **Read and write permissions**

## Ручная настройка (если Actions не работают)

### Вариант 1: Через docs папку

1. Соберите проект локально:
   ```bash
   npm run build
   ```

2. Создайте папку `docs` в корне репозитория:
   ```bash
   mkdir docs
   cp -r dist/* docs/
   ```

3. Добавьте и закоммитьте:
   ```bash
   git add docs/
   git commit -m "Add docs for GitHub Pages"
   git push
   ```

4. В настройках Pages выберите:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/docs`

### Вариант 2: Через gh-pages пакет

1. Установите gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Добавьте скрипты в package.json:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Запустите деплой:
   ```bash
   npm run deploy
   ```

## Проверка работы

После настройки ваш сайт будет доступен по адресу:
```
https://kras174.github.io/portfolio2025/
```

## Устранение проблем

### Actions не запускаются
- Проверьте, что файл `.github/workflows/deploy.yml` существует
- Убедитесь, что репозиторий публичный (для бесплатных аккаунтов)
- Проверьте права доступа в Settings → Actions

### Сайт не отображается
- Подождите 5-10 минут после деплоя
- Проверьте, что в Settings → Pages указан правильный URL
- Убедитесь, что в папке `dist` есть файл `index.html`

### Стили не загружаются
- Проверьте, что CSS файл создается при билде
- Убедитесь, что пути к файлам правильные
- Проверьте консоль браузера на ошибки

## Полезные ссылки

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
