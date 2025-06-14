const n={title:"Ошибки и решения",navTitle:"Ошибки",id:"errors",items:[{summary:"Ошибка при клонировании, гит не установлен",content:`При первом запуске Вебсторма и попытке клонировать репозиторий может высветитьсяошибка по типу 'Git is not installed' или примерно такое сообщение в маленьком попапе снизу справа.

РЕШЕНИЕ
Установить Git
Настройки Вебсторма, Version Control, Git
В поле Path to Git executable указать путь к Git
Обычно выглядит как один из вариантов:
C:\\Program Files\\Git\\bin\\git.exe
Или
C:\\Program Files\\Git\\cmd\\git.exe

Чтобы проверить надо нажать рядом кнопку Test и должно выйти Git executed successfully
`},{summary:"Ошибка идентификации аккаунта",content:`Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'toopi@DESKTOP-A29EANT.(none)')

РЕШЕНИЕ
В Windows Powershell
git config --global user.name "Ruslan-bekdev"
и
git config --global user.email "toopikoliko2@gmail.com"`},{summary:"Ошибка идентификации аккаунта",content:`Имя "npm" не распознано как имя командлета, функции, файла с
ценария или выполняемой программы. Проверьте правильность написания
имени, а также наличие и правильность пути, после чего повторите попытку.
строка:1 знак:1
+ npm i
+ ~~~
    + CategoryInfo          : ObjectNotFound: (npm:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

РЕШЕНИЕ
Установить Node.js, перезагрузить все консоли
Чтобы проверить пишем в PowerShell: $env:Path -split ";"
Там должна появиться строка C:\\Program Files\\nodejs\\`},{summary:"Ветвь не найдена (В начале проекта при пуше может произойти ошибка)",content:`error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/Ruslan-bekdev/arcades.git'

РЕШЕНИЕ
это значит что нет такой ветви как мейн. 
git branch проверка текущей ветви
git push origin master если текущая ветвь master
если нужна именно ветвь main то 
git checkout -b main
ветвь создана. Теперь пушим
git push -u origin main`},{summary:`Связь локальных и удаленных ветвей (
при попытке пуша. Скорее всего после предыдущей ошибки 'Ветвь не найдена')`,content:`fatal: The current branch main has no upstream branch.
To push the current branch and set the remote as upstream, use     

    git push --set-upstream origin main

To have this happen automatically for branches without a tracking  
upstream, see 'push.autoSetupRemote' in 'git help config'.

РЕШЕНИЕ
локальная ветка main не связана с удалённой веткой на GitHub.
Нужно установить upstream (верхний уровень)
git push --set-upstream origin main
Пояснение:
--set-upstream: Эта опция связывает локальную ветку с удалённой веткой на origin (удалённом репозитории).
origin: Это имя удалённого репозитория (по умолчанию при создании репозитория в Git).`},{summary:"Редакс логгер не импортируется",content:`Если в тайпскрипт проекте не импортируется редакс, то нжно установить специальную зависимость
@types/redux-logger`},{summary:`Ошибка импорта, экспорта в скрипт файле (при подключении скрипта к html через тег script
в консоли выходит ошибка)`,content:`import declarations may only appear at top level of a module

РЕШЕНИЕ
добавить type="module" для срикпт тега.
пояснение:
дело в том, что импорты и экспорты можно использовать только в модульных скриптах`},{summary:"Ошибка при деплое vite проекта",content:`1. Не удалось воспроизвести медиа. Нет декодеров для запрошенных форматов: text/html
2. HTTP «Content-Type» типа «text/html» не поддерживается. Не удалось загрузить медиаресурс http://localhost:5173/. 

РЕШЕНИЕ
если есть файл vite.config.js то указать там base с ссылкой на сайт.
например так
import { defineConfig } from 'vite';

export default defineConfig({
    root: './',
    base: 'https://ruslan-bekdev.github.io/codenote/',
    build: {
        outDir: 'dist',
        sourcemap: true,
    },
    server: {
        port: 3000,
    },
});
`},{summary:"Ошибка при деплое vite проекта 2",content:`x Build failed in 2.41s
error during build:
[vite:esbuild-transpile] The service was stopped
    at C:\\Users\\Zooppio\\WebstormProjects\\codenote\\node_modules\\esbuild\\lib\\main.js:737:38
    at responseCallbacks.<computed> (C:\\Users\\Zooppio\\WebstormProjects\\codenote\\node_modules\\esbuild\\lib\\main.js:622:9)
    at Socket.afterClose (C:\\Users\\Zooppio\\WebstormProjects\\codenote\\node_modules\\esbuild\\lib\\main.js:613:28)
    at Socket.emit (node:events:530:35)
    at endReadableNT (node:internal/streams/readable:1698:12)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21)
PS C:\\Users\\Zooppio\\WebstormProjects\\codenote>

РЕШЕНИЕ
Удаляем старые модули и кэши
rm -rf node_modules
rm package-lock.json # если есть
npm cache clean --force

Устанавливаем заново
npm install
Принудительно переустановить esbuild
Иногда esbuild нужно пересобрать для правильной архитектуры:
npm rebuild esbuild
`},{summary:"Ошибка при деплое vite проекта 3",content:`Fatal process out of memory: Zone Allocation failed
<--- Last few GCs --->
[3792:00000142F4241000]     2340 ms: Scavenge 91.2 (107.8) -> 77.5 (108.8) MB, pooled: 0 MB, 3.45 / 0.00 ms  (average mu = 0.973, current mu = 0.973) allocation failure;
[3792:00000142F4241000]     2404 ms: Scavenge 92.4 (109.1) -> 78.4 (110.6) MB, pooled: 0 MB, 2.64 / 0.00 ms  (average mu = 0.973, current mu = 0.973) allocation failure;

<--- JS stacktrace --->
FATAL ERROR: Zone Allocation failed - process out of memory
----- Native stack trace -----
 1: 00007FF7A30B8F3D
 1: 00007FF7A30B8F3D
 2: 00007FF7A2F9956F
 3: 00007FF7A4357126
 2: 00007FF7A2F9956F
 3: 00007FF7A4357126
 4: 00007FF7A3D06631
 5: 00007FF7A37AC5DB
 6: 00007FF7A369A143
 7: 00007FF7A36A1849
 8: 00007FF7A367193A
 9: 00007FF7A36A1181
10: 00007FF7A36A9B96
11: 00007FF7A36B3CBB
12: 00007FF7A3685E5F
13: 00007FF7A36D2A18
14: 00007FF7A36D2E64
15: 00007FF7A36B7901
16: 00007FF7A3C82124
17: 00007FF7A36B8E42
18: 00007FF7A3F11E15
19: 00007FF7A2F9BE09
20: 00007FF7A311AA43
21: 00007FF7A4A95A9E
22: 00007FF802A77034 BaseThreadInitThunk+20
23: 00007FF802F62651

РЕШЕНИЕ
Ошибка указывает на то, что данных слишком много. Нужно просто очистить кэш 
npm cache clean --force
`},{summary:"Если git push не работает (Не изменяет ничего в гитхабе, но ошибок нет)",content:`РЕШЕНИЕ
Нужно войти в аккаунт.
Указать почту редактору ГЛОБАЛЬНО чтобы на другие проекты тоже распространялось
git config --global user.email "toopikoliko2@gmail.com"
`},{summary:"Фантомные языки",content:`Если каким то образом появились языки при смене раскладки, но в настройках их нет,то их и не получится удалить обычным способом. Как это могло случиться? Лично у меня это получилось когдая устанавливал нужный мне язфк и случайно прокрутил колесиком мыши наведясь к закрытому 'окну' выбора языков.
Таким образом все языки что я прокрутил поидее выюрались и сами установились

РЕШЕНИЕ
Создать текстовый файл и написать туда код. Переименовать файл с .txt на .regи запустить от имени администратора (Хотя у меня получилось и обычным запуском). Вот код:

Windows Registry Editor Version 5.00

; Очищаем список языков для текущего пользователя
[HKEY_CURRENT_USER\\Keyboard Layout\\Preload]
"1"="00000409"
"2"="00000419"

; Удаляем всё лишнее
[-HKEY_CURRENT_USER\\Keyboard Layout\\Substitutes]

; Очищаем список языков для экрана блокировки / новых пользователей
[HKEY_USERS\\.DEFAULT\\Keyboard Layout\\Preload]
"1"="00000409"
"2"="00000419"

[-HKEY_USERS\\.DEFAULT\\Keyboard Layout\\Substitutes]`}]};export{n as default};
//# sourceMappingURL=errors-C7yZ5gIh.js.map
