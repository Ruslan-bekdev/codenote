const n={title:"Туториалы",navTitle:"Туториалы",id:"tutorials",items:[{summary:"Создание гитхаб проекта",content:`создать репозиторий в гитхабе
выбираем будет ли репозиторий приватным или публичным

сначало создай основу проекта, например vite или react
а потом уже инициализируй через git init
подключить проект в репозиторий через команду
git remote add origin https://github.com/Ruslan-bekdev/codenote (ссылку свою)

git branch -M main чтобы переименовать текущую ветвь в мейн
git push -u origin main при первом пуше`},{summary:"Создание React проекта и первичная настройка",content:`npx create-react-app . --template typescript (в конце это если прорект будет тайпскрипт)

удаляем лишнее
в папке public
favicon.ico
/правки в index.html, /
logo192.png
/правки в index.html, /
logo512.png
manifest.json (это для проектов PWA то есть типо приложений. Для сайтов не нужен)
/правки в index.html, /

в папке src
очищаем App.css
App.test.tsx (файл для тестов. Если тесты не планируются удаляем)
Очищаем App и переделываем в стрелочную функцию
reportWebVitals.ts (отслеживание производительности)
/index.tsx/
setupTests.ts (для тестов)
logo.svg`},{summary:"Создание Vite проекта и первичная настройка",content:`VITE
npm create vite@latest .
команда запуска: npm run dev

добавляем плагин
Создай vite.config.js и добавь туда
import Inspect from 'vite-plugin-inspect';

export default {
    plugins: [
        Inspect(),
    ]
}
Чтобы включить плагин надо перезапустить хостинг

Удаляем лишнее
В папке public
удаляем vite.svg

В папке src
очищаем main.js
удаляем counter.js
удаляем javascript.svg
очищаем style.css`},{summary:"Деплой на Гитхаб пейджес",content:`1.Первичный деплой
Настройки-pages:
Выбрать главную ветвь и сейв
Скопировать ссылку которая появится

2.Настройка проекта
Пекейдж Джейсон:
Добавить homepage и указать ему скопированную ссылку
npm i gh-pages
В scripts прописать следующие ключи
"deploy": "gh-pages -d build",
"predeploy": "npm run build"
Закомитить все и запушить

3.Деплой
npm run deploy
Настройка-pages:
Поменять ветвь на gh-pages
Подождать

Замечания!
Если в проекте есть Браузер Роутер, то:
в элемент BrowserRouter из index.js надо добавить селектор basename={process.env.PUBLIC_URL`},{summary:"Деплой на Гитхаб пейджес vite vanilla js проекта",content:`1.Первичный деплой
Настройки-pages:
Выбрать главную ветвь и сейв
Скопировать ссылку которая появится

2.Настройка проекта
npm i gh-pages
В scripts прописать следующие ключи после ключа "dev"
"deploy": "gh-pages -d dist",
"predeploy": "npm run build"
указать в файле vite.config.js ключ base с ссылкой в значении (если такого файла нет - создать)
Например такbase: 'https://ruslan-bekdev.github.io/codenote/',
В итоге должно быть так import { defineConfig } from 'vite';

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
Закомитить все и запушить

3.Деплой
npm run deploy
Настройка-pages:
Поменять ветвь на gh-pages
Подождать`},{summary:"Установка JetBrains программ и обход лицензии",content:`Установить с нуля свежий редактор
Перейти на сайт https://3.jetbra.in
Перейти на любой онлайн сервер
Установить архив, показавшийся сверху сайта jetbra.zip
Распаковать, scripts > install-all-users.vbs
Нажать Ок и подождать пока не выйдет окно Done
Запускаем редактор, нажимаем активейт, активейшн код
На сайте находим нужный редактор и копируем ключ
Вставляем в редактор поле для кода и нажимаем активейт
`},{summary:"Реализация хашированного пароля на сайт (средняя защита. Опытные кодеры легко взломают)",content:`Создаем js файл и пишем туда
import bcrypt from "bcryptjs";

const storedHash = "СЮДА СВОЙ ХЕШ";

function authenticateUser() {
    const userPassword = prompt("Введите пароль для доступа:");

    if (!userPassword) {
        document.body.innerHTML = "<h1>Доступ запрещен</h1>";
        return;
    }

    const isMatch = bcrypt.compareSync(userPassword, storedHash);

    if (isMatch) {
        alert("Пароль верный! Добро пожаловать.");
    } else {
        alert("Неверный пароль! Доступ запрещен.");
        document.body.innerHTML = "<h1>Доступ запрещен</h1>";
    }
}

Откуда взять Хеш?
выполняем npm i bcryptjs
выполняем команду node и втсавляем туда это:
export default authenticateUser;npm install bcryptjs
const bcrypt = require("bcryptjs");
const password = "ПАРОЛЬ СЮДА СВОЙ";
bcrypt.hash(password, 10, function (err, hash) {
  console.log("Хэш пароля:", hash);
});
Он даст хеш, который и нужно вставить в созданный js файл
Затем создаем другой js файл и вставляем туда
import authenticateUser from "./ТОТ САМЫЙ ПЕРВЫЙ JS ФАЙЛ.js";

document.addEventListener("DOMContentLoaded", () => {
    authenticateUser();
});

Если нужно изменить пароль, то просто меняем его и вставляем в node, меняя хеш`},{summary:"Переменные в ванильном CSS",content:`:root {
    --example-var-name: "example value";
    --exampleVarName: "example value"
}

.exampleClassname {
    color: var(--example-var-name);
    background-color: var(--exampleVarName);
}`},{summary:"Фикс яркости ноутбука чтобы не зависил от зарядки",content:`Есть 2 варианта (2й Вариант для AMD):
Диспетчер задач, Батарея,
ПКМ по "Батарея с ACPI-совместимым управлением Майкрософт"
Отключить устройство. (Минус: индикатор зарядки тоже исчезает)

Переходим на сайт по ссылке
https://www.amd.com/en/support/kb/release-notes/rn-rad-win-15-7-1
Скачиваем по подходящей ссылке
Устанавливем, выбираем быструю установку, убираем галочку в "Разрешить веб-содержание"
ПКМ по рабочему столу, новая кнопка "AMD  catalyst control center"
Питание, "PowerPlay", убрать галочку с "Включить Vari-Bright"`},{summary:"Сочетание клавиш",content:`Ctrl + Shift + F или Shift * 2
Поиск по коду проекта
Ctrl + Shift + Alt + J
Выделить сразу много текста`}]};export{n as default};
//# sourceMappingURL=tutorials-BUkq0r2V.js.map
