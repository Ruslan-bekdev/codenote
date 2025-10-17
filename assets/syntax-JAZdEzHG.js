const n={title:"Синтаксис",navTitle:"Синтаксис",id:"syntax",items:[{summary:"Методы импорта Vite",content:`1. ?worker

Позволяет импортировать файл как Web Worker.

const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });

2. ?inline

    Преобразует содержимое файла в строку (работает для небольших ресурсов, например, SVG).

import svgContent from './icon.svg?inline'; // svgContent содержит строку с SVG

3. ?url

    Импортирует путь к файлу, а не само содержимое.

import imagePath from './image.png?url'; // imagePath содержит URL файла

4. ?raw

    Импортирует содержимое файла как строку (полезно для текстовых файлов, таких как .txt или .svg).

import txtContent from './file.txt?raw'; // txtContent содержит строку с содержимым файла

5. import.meta.glob

    Динамический импорт всех файлов, соответствующих шаблону.

const modules = import.meta.glob('./components/*.vue');
// modules — объект, где ключи — пути, а значения — функции импорта.

6. import.meta.globEager

    Импортирует все файлы сразу (без ленивой загрузки).

const modules = import.meta.globEager('./data/*.js');

7. ?jsx

    Преобразует JSX-файлы. Полезно для случаев, если файл не имеет стандартного расширения .jsx:

import MyComponent from './component-file.js?jsx';

8. ?wasm

    Импортирует WebAssembly (WASM) модули.

import wasmModule from './module.wasm';

9. ?module

    Явно указывает, что файл должен быть обработан как модуль.

import styles from './styles.css?module';

10. ?asset

    Преобразует файл в ассет, используемый для статических ресурсов.

import assetUrl from './file.png?asset';`},{summary:"css",content:`Единицы измерения:
px - в пикселях
em - от размера шрифта родителя
rem - от размера шрифты root (html)
% - от размера родителя
vw, vh - ширина, высота окна в процентах
dvw, dvh - динамичная ширина, высота окна в процентах (использовать на мобилках)
vmin, vmax - выбирают между высотой и шириной. vmin берет значение той стороны что меньше, vmax - что больше
ch - ширина цифры 0
ex - высота буквы x
cm,mm,in,pt,pc - обычно для печати используют. Это реальные размеры

Цвета:
Даже в обычном hex формате можно указать прозрачность например #ffffff80 - белый с 80%rgb, rgba - rgb(red, green, blue), a - alpha (прозрачность)
hsl, hsla - hsl(hue - оттенок (0–360°, 0° = красный), saturation - насыщенность (0%–100%), lightness - яркость (0%–100%)), a - alpha (прозрачность)
currentColor - Наследует цвет текста. Например "border: 2px solid currentColor;"

Фон:
background-image - изображение: url("image.jpg"), либо градиент: linear-gradient(to right, red, blue); radial-gradient(circle, yellow, green); conic-gradient(red, yellow, green); 
background-position - позиция фона: top, bottom, left, right, center; 50% 50% (по горизонтали/вертикали); 10px 20px
background-size - размер фона: auto исходный размер; cover заполняет всё пространство, обрезает фото; contain масштабирует чтобы влезло, не обрезает; 100px 200px
background-repeat - повторение фона: repeat по умолчанию, повторяется и по X, и по Y; no-repeat не повторяется; repeat-x, repeat-y повторение только по оси X/Y
background-clip - до куда показать фон: border-box до границы включая border; padding-box до padding, border прозрачный; content-box только для содержимого
background-origin - точка отсчета дял фона: border-box от границы; padding-box от padding, border прозрачный; content-box от содержимого
background-attachment - фиксирован ли фон при прокрутке: scroll - дефолт; fixed - параллакс, прилип к экрану; local - фон движется только если прокручивается лично блок с фоном, работает с overflow

Сокращённая запись всех свойств - background: url("img.jpg") no-repeat center/cover fixed; что означает: 
background-image: url("img.jpg");
background-repeat: no-repeat;
background-position: center;
background-size: cover;
background-attachment: fixed;

Текст:
font-family - определяет шрифт, можно указать несколько через запятую а браузер возьмет первый доступный
font-weight - от 100 тонкого до 900 толстого; normal = 400 (обычный); bold = 700 (жирный)
; lighter — легче родительского; bolder — жирнее родительскогоfont-style - наклон: normal дефолт; italic курсив, часто отдельный файл шрифта; oblique наклон текста без отдельного шрифта (буквы наклоняются программно)
font-variant - варианты: normal дефолт; small-caps маленькие заглавные буквы (не трогает уже заглавные, только строчные); all-small-caps все буквы маленькие заглавные; oldstyle-nums цифры старого стиля; lining-nums цифры в линию; tabular-nums цифры фиксированной ширины
line-height - высоат строки: разные значения, но можно например 1.5 без единицы измерения и будет относительно размера шрифта
letter-spacing - расстояние между буквами: normal - дефолт
word-spacing - расстояние между словами: normal - дефолт
text-align - горизонтальное выравнивание текста: left, right, center, justify (по ширине блока), start, end
text-decoration - оформление: none без подчеркивания; underline подчеркнутый; overline линия сверху; line-through зачеркнутый. Можно сразу несколько значений
text-transform - регистр: none дефолт; uppercase все заглавные; lowercase все строчные; capitalize первая буква каждого слова заглавная
text-indent - отступ первой строки
white-space - пробелы и переносы браузером: normal дефолт; nowrap запрещено переносить; pre сохраняет все пробелы и переносы; pre-wrap переносы по словам + сохранение пробелов; pre-line переносы по словам, пробелы сжимаются
word-wrap / overflow-wrap - перенос длиннх слов (word-wrap мы не используем это старый синтаксис): normal дефолт; break-word длинные слова разрываются, чтобы не выходили за блок
direction - направление текста: ltr дефолт; rtl справа налево
unicode-bidi - 

Border:
border-width - thin тонкая линия; medium средняя толщина; thick толстая линия;
border-color - transparent невидимый но занимает место; currentColor берет цвет текста;
border-style - none дефолт; solid сплошная; dotted точечная с круглыми; dashed пунктирная; double двойная сплошная; groove типа впадина; ridge наоборот типа выступ; inset как будто бы жлемент вдавлен в сайт; outset как будто элемент выступает;
Рельефные (groove, ridge, inset, outset) используют цвет рамки для расчёта светлых и тёмных оттенков, поэтому они зависят от border-color

Display:
block - занимает всю ширину, например div или p такой
inline - занимает только свою ширину, например span
inline-block - гибрид, то же что и inline но можно задать ширину и высоту
flex - элементы флексят
inline-flex - тоже флексят, но контейнер не занимает всю ширину
grid - сетка типа
inline-grid - сетка с inline контейнером
none - элемент не существует
list-item - элемент теперь пункт списка, добавляет маркер или номер как у li например
table - ведет себя как <table>
inline-table - тот же table но inline

Table (таблица):
table-layout - управление шириной колонок: auto подстраивается под содержимое; fixed равномерное распределение ширины, игнорируя содержимое (быстрее рендерится)
vertical-align - выравнивает конетнт, работает с table-cell: top по верху; middle центру, дефолт; bottom снизу; baseline линия текста соседних ячеек; sub 2 в H₂O; super 2 в x²; text-top, text-bottom верх, низ текста относительно шрифта строки
caption-side - для table-caption: top, bottom
border-collapse - взаимодействие границ: collapse границы ячеек сливаются в одну; separate границы остаются отдельным, можео использовать border-spacing
border-spacing - задает расстояние между ячейками
empty-cells - видимость пустых ячеек: show, hideДисплеи:
table-row - то же что и <tr>, ряд таблицы
table-cell - то же что и <td>, ячейка таблицы, автоматически подстраивается по высоте, по умолчанию vertical-align: middle.
table-caption - то же что и <caption>, заголовок, отображается над или под таблицей, зависит от caption-side
table-column - то же что и <col>, для задания стилей например цвет, ширина. Не создает ячейку, только стилизует
table-column-group - то же что и <colgroup>, группировко колонок
table-row-group - то же что и <tbody>, группировка рядов
table-header-group - то же что и <thead>, заголовочная группа рядов
table-footer-group - то же что и <tfoot>, нижняя группа рядов
Видимость:
visibility - visible дефолт; hidden невидимый но занимает место; collapse для таблиц: скрывает элемент и убирает его место
opacity - от 0 до 1

Остальное:
`}]};export{n as default};
//# sourceMappingURL=syntax-JAZdEzHG.js.map
