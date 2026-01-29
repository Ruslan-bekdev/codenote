export default {
    title: "Туториалы",
    navTitle: "Туториалы",
    id: "tutorials",
    items: [
        {
            summary: "Создание гитхаб проекта",
            content: "создать репозиторий в гитхабе\n" +
                "выбираем будет ли репозиторий приватным или публичным\n" +
                "\n" +
                "Сначала создай основу проекта, например vite или react\n" +
                "А потом уже инициализируй через {{git init}}\n" +
                "Подключить проект в репозиторий через команду\n" +
                "{{git remote add origin https://github.com/Ruslan-bekdev/codenote}} (ссылку свою)\n" +
                "Чтобы переименовать текущую ветвь в мейн: {{git branch -M main}}" +
                "При первом пуше: {{git push -u origin main}}"
        },
        {
            summary: "Создание React проекта и первичная настройка",
            content: "npx create-react-app . --template typescript (в конце это если прорект будет тайпскрипт)\n" +
                "\n" +
                "удаляем лишнее\n" +
                "в папке public\n" +
                "favicon.ico\n" +
                "/правки в index.html, /\n" +
                "logo192.png\n" +
                "/правки в index.html, /\n" +
                "logo512.png\n" +
                "manifest.json (это для проектов PWA то есть типо приложений. Для сайтов не нужен)\n" +
                "/правки в index.html, /\n" +
                "\n" +
                "в папке src\n" +
                "очищаем App.css\n" +
                "App.test.tsx (файл для тестов. Если тесты не планируются удаляем)\n" +
                "Очищаем App и переделываем в стрелочную функцию\n" +
                "reportWebVitals.ts (отслеживание производительности)\n" +
                "/index.tsx/\n" +
                "setupTests.ts (для тестов)\n" +
                "logo.svg"
        },
        {
            summary: "Создание Vite проекта и первичная настройка",
            content: "VITE" +
                "{{npm create vite@latest .}}" +
                "Команда запуска: {{npm run dev}}" +
                "Далее добавляем плагин\n" +
                "Создай vite.config.js и добавь туда\n" +
                "{{import Inspect from 'vite-plugin-inspect';\n" +
                "\n" +
                "export default {\n" +
                "    plugins: [\n" +
                "        Inspect(),\n" +
                "    ]\n" +
                "} }}" +
                "чтобы включить плагин надо перезапустить хостинг\n" +
                "\n" +
                "Удаляем лишнее\n" +
                "В папке public\n" +
                "удаляем vite.svg\n" +
                "\n" +
                "В папке src\n" +
                "очищаем main.js\n" +
                "удаляем counter.js\n" +
                "удаляем javascript.svg\n" +
                "очищаем style.css"
        },
        {
            summary: 'Деплой на Гитхаб пейджес',
            content: '1.Первичный деплой\n' +
                'Настройки-pages:\n' +
                'Выбрать главную ветвь и сейв\n' +
                'Скопировать ссылку которая появится\n' +
                '\n' +
                '2.Настройка проекта\n' +
                'Пекейдж Джейсон:\n' +
                'Добавить homepage и указать ему скопированную ссылку' +
                '{{npm i gh-pages}}' +
                'В scripts прописать следующие ключи\n' +
                '{{"deploy": "gh-pages -d build",\n' +
                '"predeploy": "npm run build"}}' +
                'Закомитить все и запушить\n' +
                '\n' +
                '3.Деплой' +
                '{{npm run deploy}}' +
                'Настройка-pages:\n' +
                'Поменять ветвь на gh-pages\n' +
                'Подождать\n' +
                '\n' +
                'Замечания!\n' +
                'Если в проекте есть Браузер Роутер, то:\n' +
                'в элемент BrowserRouter из index.js надо добавить селектор {{basename={process.env.PUBLIC_URL} }}',
        },
        {
            summary: 'Деплой на Гитхаб пейджес vite vanilla js проекта',
            content: '1.Первичный деплой\n' +
                'Настройки-pages:\n' +
                'Выбрать главную ветвь и сейв\n' +
                'Скопировать ссылку которая появится\n' +
                '\n' +
                '2.Настройка проекта' +
                '{{npm i gh-pages}}' +
                'В scripts прописать следующие ключи после ключа "dev"\n' +
                '{{"deploy": "gh-pages -d dist",\n' +
                '"predeploy": "npm run build"}}' +
                'указать в файле vite.config.js ключ base с ссылкой в значении (если такого файла нет - создать)\n' +
                'Например так' +
                '{{base: \'https://ruslan-bekdev.github.io/codenote/\',}}' +
                'В итоге должно быть так {{import { defineConfig } from \'vite\';\n' +
                '\n' +
                'export default defineConfig({\n' +
                '    root: \'./\',\n' +
                '    base: \'https://ruslan-bekdev.github.io/codenote/\',\n' +
                '    build: {\n' +
                '        outDir: \'dist\',\n' +
                '        sourcemap: true,\n' +
                '    },\n' +
                '    server: {\n' +
                '        port: 3000,\n' +
                '    },\n' +
                '}); }}' +
                'Закомитить все и запушить\n' +
                '\n' +
                '3.Деплой\n' +
                '{{npm run deploy}}\n' +
                'Настройка-pages:\n' +
                'Поменять ветвь на gh-pages\n' +
                'Подождать'
        },
        {
          summary: 'Установка JetBrains программ и обход лицензии',
          content: 'Установить с нуля свежий редактор\n' +
              'Перейти на сайт {{https://3.jetbra.in}}\n' +
              'Перейти на любой онлайн сервер\n' +
              'Установить архив, показавшийся сверху сайта jetbra.zip\n' +
              'Распаковать, scripts > install-all-users.vbs\n' +
              'Нажать Ок и подождать пока не выйдет окно Done\n' +
              'Запускаем редактор, нажимаем активейт, активейшн код\n' +
              'На сайте находим нужный редактор и копируем ключ\n' +
              'Вставляем в редактор поле для кода и нажимаем активейт\n'
        },
        {
          summary: 'Реализация хашированного пароля на сайт (средняя защита. Опытные кодеры легко взломают)',
          content: 'Создаем js файл и пишем туда\n' +
              '{{import bcrypt from "bcryptjs";\n' +
              '\n' +
              'const storedHash = "СЮДА СВОЙ ХЕШ";\n' +
              '\n' +
              'function authenticateUser() {\n' +
              '    const userPassword = prompt("Введите пароль для доступа:");\n' +
              '\n' +
              '    if (!userPassword) {\n' +
              '        document.body.innerHTML = "<h1>Доступ запрещен</h1>";\n' +
              '        return;\n' +
              '    }\n' +
              '\n' +
              '    const isMatch = bcrypt.compareSync(userPassword, storedHash);\n' +
              '\n' +
              '    if (isMatch) {\n' +
              '        alert("Пароль верный! Добро пожаловать.");\n' +
              '    } else {\n' +
              '        alert("Неверный пароль! Доступ запрещен.");\n' +
              '        document.body.innerHTML = "<h1>Доступ запрещен</h1>";\n' +
              '    }\n' +
              '} }}' +
              'Откуда взять Хеш?\n' +
              'выполняем {{npm i bcryptjs}}' +
              'выполняем команду node и втсавляем туда это:\n' +
              '{{export default authenticateUser;\n' +
              'npm install bcryptjs\n' +
              'const bcrypt = require("bcryptjs");\n' +
              'const password = "ПАРОЛЬ СЮДА СВОЙ";\n' +
              'bcrypt.hash(password, 10, function (err, hash) {\n' +
              '  console.log("Хэш пароля:", hash);\n' +
              '}); }}' +
              'Он даст хеш, который и нужно вставить в созданный js файл\n' +
              'Затем создаем другой js файл и вставляем туда\n' +
              '{{import authenticateUser from "./ТОТ САМЫЙ ПЕРВЫЙ JS ФАЙЛ.js";\n' +
              '\n' +
              'document.addEventListener("DOMContentLoaded", () => {\n' +
              '    authenticateUser();\n' +
              '}); }}' +
              'Если нужно изменить пароль, то просто меняем его и вставляем в node, меняя хеш'
        },
        {
            summary: 'Переменные в ванильном CSS',
            content: '{{:root {\n' +
                '    --example-var-name: "example value";\n' +
                '    --exampleVarName: "example value"\n' +
                '}\n' +
                '\n' +
                '.exampleClassname {\n' +
                '    color: var(--example-var-name);\n' +
                '    background-color: var(--exampleVarName);\n' +
                '} }}'
        },
        {
            summary: 'Фикс яркости ноутбука чтобы не зависил от зарядки',
            content: 'Есть 2 варианта (2й Вариант для AMD):\n' +
                'Диспетчер задач, Батарея,\n' +
                'ПКМ по "Батарея с ACPI-совместимым управлением Майкрософт"\n' +
                'Отключить устройство. (Минус: индикатор зарядки тоже исчезает)' +
                '\n\n' +
                'Переходим на сайт по ссылке' +
                '{{https://www.amd.com/en/support/kb/release-notes/rn-rad-win-15-7-1}}' +
                'Скачиваем по подходящей ссылке\n' +
                'Устанавливем, выбираем быструю установку, убираем галочку в "Разрешить веб-содержание"\n' +
                'ПКМ по рабочему столу, новая кнопка "AMD  catalyst control center"\n' +
                'Питание, "PowerPlay", убрать галочку с "Включить Vari-Bright"'
        },
        {
            summary: 'Установка Microsoft Store если его нет (например после моего тутора на винду)',
            content: '{{wsreset –i}} в командную строку'
        },
        {
            summary: 'Как починить рассинхрон аудио и видео через ffmpeg',
            content: 'Переходим по ссылке {{https://ffmpeg.org/download.html#build-windows}}' +
                'В моём случае переходим к Виндовс и выбираем один из двух Билдов. Лично я выбрал билд от gyan.dev\n' +
                'В новой странице нас интересуют release builds, выбираем неполную версию ffmpeg-release-essentials.zip\n' +
                'Распаковфваем и переносим папку в удобное дял нас место, например в диск C:\\FFmpeg (можно переименовать для удобства)\n' +
                'В Пуск находим "Изменить системные переменные среды"\n' +
                'В открывшемся окне внизу “Переменные среды” → выдели Path → “Изменить” → “Создать” → вставь C:\\FFmpeg\\bin (можно через Обзор, это удобнее)\n' +
                'Теперь в командной строке пишем команду ffmpeg -version, если появился длинный текст с информацией о программе, значит готово' +
                '\n\n' +
                'Определимся с командами. Если Рот отркывается, а потом только звук то используем отрицательное значение -itsoffset -1, иначе положительное -itsoffset 1. -c copy гарантирует отстутствие перекадирования\n' +
                'Команда выглядит так "{{ffmpeg -i "" -itsoffset -1 -i "" -map 0:v -map 1:a -c copy ""}}' +
                'Также можно исправлять сразу несколько видео в одной ппаке, то подходит следующий код' +
                '{{for %f in ("СЮДА") do ffmpeg -i "%f" -itsoffset -1 -i "%f" -map 0:v -map 1:a -c copy "ТУДА"}}' +
                'В этом коде СЮДА надо написать путь к папке с видео как обычно, но вместо названия написать *, а ТУДА написать путь к файлу сохранения но вместо название написать %~nf, таким образом он сохранится под старым названием\n' +
                'Пример: {{for %f in ("C:\\video\\*.mp4") do ffmpeg -i "%f" -itsoffset -1 -i "%f" -map 0:v -map 1:a -c copy "C:\\fixedVideo\\%~nf_fixed.mp4"}}'
        },
        {
            summary: 'Сочетание клавиш',
            content: 'Ctrl + Shift + F или Shift * 2\n' +
                'Поиск по коду проекта\n' +
                'Ctrl + Shift + Alt + J\n' +
                'Выделить сразу много текста'
        },
        {
            summary: 'Choco',
            content: 'Команда для установки: {{Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString(\'https://community.chocolatey.org/install.ps1\'))}}'
        },
    ]
};