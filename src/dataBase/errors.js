export default {
    title: "Ошибки и решения",
    navTitle: "Ошибки",
    id: "errors",
    items: [
        {
            summary: "Ошибка при клонировании, гит не установлен",
            content: "" +
                "При первом запуске Вебсторма и попытке клонировать репозиторий может высветиться" +
                "ошибка по типу \'Git is not installed\' или примерно такое сообщение в маленьком попапе снизу справа."+
                "\n\n" +
                "РЕШЕНИЕ\n" +
                "Установить Git\n" +
                "Настройки Вебсторма, Version Control, Git\n" +
                "В поле Path to Git executable указать путь к Git\n" +
                "Обычно выглядит как один из вариантов:\n" +
                "C:\\Program Files\\Git\\bin\\git.exe\n" +
                "Или\n" +
                "C:\\Program Files\\Git\\cmd\\git.exe\n\n" +
                "Чтобы проверить надо нажать рядом кнопку Test и должно выйти Git executed successfully\n"
        },
        {
            summary: "Ошибка идентификации аккаунта",
            content: "" +
                "Author identity unknown\n" +
                "\n" +
                "*** Please tell me who you are.\n" +
                "\n" +
                "Run\n" +
                "\n" +
                "  git config --global user.email \"you@example.com\"\n" +
                "  git config --global user.name \"Your Name\"\n" +
                "\n" +
                "to set your account's default identity.\n" +
                "Omit --global to set the identity only in this repository.\n" +
                "\n" +
                "fatal: unable to auto-detect email address (got 'toopi@DESKTOP-A29EANT.(none)')" +
                "\n\n" +
                "РЕШЕНИЕ\n" +
                "В Windows Powershell\n" +
                "git config --global user.name \"Ruslan-bekdev\"\n" +
                "и\n" +
                "git config --global user.email \"toopikoliko2@gmail.com\""
        },
        {
            summary: "Ошибка идентификации аккаунта",
            content: "" +
                "Имя \"npm\" не распознано как имя командлета, функции, файла с\n" +
                "ценария или выполняемой программы. Проверьте правильность написания\n" +
                "имени, а также наличие и правильность пути, после чего повторите попытку.\n" +
                "строка:1 знак:1\n" +
                "+ npm i\n" +
                "+ ~~~\n" +
                "    + CategoryInfo          : ObjectNotFound: (npm:String) [], CommandNotFoundException\n" +
                "    + FullyQualifiedErrorId : CommandNotFoundException" +
                "\n\n" +
                "РЕШЕНИЕ\n" +
                "Установить Node.js, перезагрузить все консоли\n" +
                "Чтобы проверить пишем в PowerShell: $env:Path -split \";\"\n" +
                "Там должна появиться строка C:\\Program Files\\nodejs\\"
        },
        {
            summary: "Ветвь не найдена (В начале проекта при пуше может произойти ошибка)",
            content: "error: src refspec main does not match any\n" +
                "error: failed to push some refs to 'https://github.com/Ruslan-bekdev/arcades.git'\n" +
                "\nРЕШЕНИЕ\n" +
                "это значит что нет такой ветви как мейн. \n" +
                "git branch проверка текущей ветви\n" +
                "git push origin master если текущая ветвь master\n" +
                "если нужна именно ветвь main то \n" +
                "git checkout -b main\n" +
                "ветвь создана. Теперь пушим\n" +
                "git push -u origin main"
        },
        {
            summary: "Связь локальных и удаленных ветвей (\n" +
                "при попытке пуша. Скорее всего после предыдущей ошибки 'Ветвь не найдена')",
            content: "fatal: The current branch main has no upstream branch.\n" +
                "To push the current branch and set the remote as upstream, use     \n" +
                "\n" +
                "    git push --set-upstream origin main\n" +
                "\n" +
                "To have this happen automatically for branches without a tracking  \n" +
                "upstream, see 'push.autoSetupRemote' in 'git help config'.\n\n" +
                "РЕШЕНИЕ\n" +
                "локальная ветка main не связана с удалённой веткой на GitHub.\n" +
                "Нужно установить upstream (верхний уровень)\n" +
                "git push --set-upstream origin main\n" +
                "Пояснение:\n" +
                "--set-upstream: Эта опция связывает локальную ветку с удалённой веткой на origin (удалённом репозитории).\n" +
                "origin: Это имя удалённого репозитория (по умолчанию при создании репозитория в Git)."
        },
        {
            summary: 'Редакс логгер не импортируется',
            content: 'Если в тайпскрипт проекте не импортируется редакс, то нжно установить специальную зависимость\n' +
                '@types/redux-logger',
        },
        {
            summary: 'Ошибка импорта, экспорта в скрипт файле (при подключении скрипта к html через тег script\n' +
                'в консоли выходит ошибка)',
            content: 'import declarations may only appear at top level of a module\n\n' +
                'РЕШЕНИЕ\n' +
                'добавить type="module" для срикпт тега.\n' +
                'пояснение:\n' +
                'дело в том, что импорты и экспорты можно использовать только в модульных скриптах',
        },
        {
          summary: 'Ошибка при деплое vite проекта',
          content: '' +
              '1. Не удалось воспроизвести медиа. Нет декодеров для запрошенных форматов: text/html\n' +
              '2. HTTP «Content-Type» типа «text/html» не поддерживается. Не удалось загрузить медиаресурс http://localhost:5173/. \n' +
              '\n' +
              'РЕШЕНИЕ\n' +
              'если есть файл vite.config.js то указать там base с ссылкой на сайт.\n' +
              'например так\n' +
              'import { defineConfig } from \'vite\';\n' +
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
              '});\n',
        },
        {
          summary: 'Ошибка при деплое vite проекта 2',
          content: '' +
              'x Build failed in 2.41s\n' +
              'error during build:\n' +
              '[vite:esbuild-transpile] The service was stopped\n' +
              '    at C:\\Users\\Zooppio\\WebstormProjects\\codenote\\node_modules\\esbuild\\lib\\main.js:737:38\n' +
              '    at responseCallbacks.<computed> (C:\\Users\\Zooppio\\WebstormProjects\\codenote\\node_modules\\esbuild\\lib\\main.js:622:9)\n' +
              '    at Socket.afterClose (C:\\Users\\Zooppio\\WebstormProjects\\codenote\\node_modules\\esbuild\\lib\\main.js:613:28)\n' +
              '    at Socket.emit (node:events:530:35)\n' +
              '    at endReadableNT (node:internal/streams/readable:1698:12)\n' +
              '    at process.processTicksAndRejections (node:internal/process/task_queues:90:21)\n' +
              'PS C:\\Users\\Zooppio\\WebstormProjects\\codenote>\n' +
              '\n' +
              'РЕШЕНИЕ\n' +
              'Удаляем старые модули и кэши\n' +
              'rm -rf node_modules\n' +
              'rm package-lock.json # если есть\n' +
              'npm cache clean --force\n\n' +
              'Утсанавливаем заново\n' +
              'npm install\n' +
              'Принудительно переустановить esbuild\n' +
              'Иногда esbuild нужно пересобрать для правильной архитектуры:\n' +
              'npm rebuild esbuild\n',
        },
        {
          summary: 'Если git push не работает (Не изменяет ничего в гитхабе, но ошибок нет)',
          content: '' +
              'РЕШЕНИЕ\n' +
              'Нужно войти в аккаунт.\n' +
              'Указать почту редактору ГЛОБАЛЬНО чтобы на другие проекты тоже распространялось\n' +
              'git config --global user.email "toopikoliko2@gmail.com"\n',
        },
        {
          summary: 'Ошибка при деплое vite проекта ещё одна',
          content: 'Fatal process out of memory: Zone Allocation failed\n' +
              '<--- Last few GCs --->\n' +
              '[3792:00000142F4241000]     2340 ms: Scavenge 91.2 (107.8) -> 77.5 (108.8) MB, pooled: 0 MB, 3.45 / 0.00 ms  (average mu = 0.973, current mu = 0.973) allocation failure;\n' +
              '[3792:00000142F4241000]     2404 ms: Scavenge 92.4 (109.1) -> 78.4 (110.6) MB, pooled: 0 MB, 2.64 / 0.00 ms  (average mu = 0.973, current mu = 0.973) allocation failure;\n' +
              '\n' +
              '<--- JS stacktrace --->\n' +
              'FATAL ERROR: Zone Allocation failed - process out of memory\n' +
              '----- Native stack trace -----\n' +
              ' 1: 00007FF7A30B8F3D\n' +
              ' 1: 00007FF7A30B8F3D\n' +
              ' 2: 00007FF7A2F9956F\n' +
              ' 3: 00007FF7A4357126\n' +
              ' 2: 00007FF7A2F9956F\n' +
              ' 3: 00007FF7A4357126\n' +
              ' 4: 00007FF7A3D06631\n' +
              ' 5: 00007FF7A37AC5DB\n' +
              ' 6: 00007FF7A369A143\n' +
              ' 7: 00007FF7A36A1849\n' +
              ' 8: 00007FF7A367193A\n' +
              ' 9: 00007FF7A36A1181\n' +
              '10: 00007FF7A36A9B96\n' +
              '11: 00007FF7A36B3CBB\n' +
              '12: 00007FF7A3685E5F\n' +
              '13: 00007FF7A36D2A18\n' +
              '14: 00007FF7A36D2E64\n' +
              '15: 00007FF7A36B7901\n' +
              '16: 00007FF7A3C82124\n' +
              '17: 00007FF7A36B8E42\n' +
              '18: 00007FF7A3F11E15\n' +
              '19: 00007FF7A2F9BE09\n' +
              '20: 00007FF7A311AA43\n' +
              '21: 00007FF7A4A95A9E\n' +
              '22: 00007FF802A77034 BaseThreadInitThunk+20\n' +
              '23: 00007FF802F62651\n' +
              '\n' +
              'РЕШЕНИЕ\n' +
              'Ошибка указывает на то, что данных слишком много. Нужно просто очистить кэш \n' +
              'npm cache clean --force\n',
        },
        {
          summary: 'Фантомные языки',
          content: 'Если каким то образом появились языки при смене раскладки, но в настройках их нет,' +
              'то их и не получится удалить обычным способом. Как это могло случиться? Лично у меня это получилось когда' +
              'я устанавливал нужный мне язфк и случайно прокрутил колесиком мыши наведясь к закрытому \'окну\' выбора языков.\n' +
              'Таким образом все языки что я прокрутил поидее выюрались и сами установились' +
              '\n\n' +
              'РЕШЕНИЕ\n' +
              'Создать текстовый файл и написать туда код. Переименовать файл с .txt на .reg' +
              'и запустить от имени администратора (Хотя у меня получилось и обычным запуском). Вот код:\n\n' +
              'Windows Registry Editor Version 5.00\n' +
              '\n' +
              '; Очищаем список языков для текущего пользователя\n' +
              '[HKEY_CURRENT_USER\\Keyboard Layout\\Preload]\n' +
              '"1"="00000409"\n' +
              '"2"="00000419"\n' +
              '\n' +
              '; Удаляем всё лишнее\n' +
              '[-HKEY_CURRENT_USER\\Keyboard Layout\\Substitutes]\n' +
              '\n' +
              '; Очищаем список языков для экрана блокировки / новых пользователей\n' +
              '[HKEY_USERS\\.DEFAULT\\Keyboard Layout\\Preload]\n' +
              '"1"="00000409"\n' +
              '"2"="00000419"\n' +
              '\n' +
              '[-HKEY_USERS\\.DEFAULT\\Keyboard Layout\\Substitutes]',
        },
    ]
};
