export default {
    title: "Ошибки и их решения",
    navTitle: "Ошибки",
    id: "errors",
    items: [
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
              'РЕШЕНИЕ' +
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
          summary: 'Если git push не работает (Не изменяет ничего в гитхабе, но ошибок нет)',
          content: '' +
              'РЕШЕНИЕ' +
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
              'РЕШЕНИЕ' +
              'Ошибка указывает на то, что данных слишком много. Нужно просто очистить кэш \n' +
              'npm cache clean --force\n',
        },
    ]
};
