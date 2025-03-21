const n={title:"Ошибки и их решения",navTitle:"Ошибки",id:"errors",items:[{summary:"Ошибка идентификации аккаунта",content:`Author identity unknown

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
git config --global user.email "toopikoliko2@gmail.com"`},{summary:"Ветвь не найдена (В начале проекта при пуше может произойти ошибка)",content:`error: src refspec main does not match any
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

РЕШЕНИЕесли есть файл vite.config.js то указать там base с ссылкой на сайт.
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
`},{summary:"Если git push не работает (Не изменяет ничего в гитхабе, но ошибок нет)",content:`РЕШЕНИЕНужно войти в аккаунт.
Указать почту редактору ГЛОБАЛЬНО чтобы на другие проекты тоже распространялось
git config --global user.email "toopikoliko2@gmail.com"
`}]};export{n as default};
//# sourceMappingURL=errors-BSZQh9Sn.js.map
