export default {
    title: "Синтаксис",
    navTitle: "Синтаксис",
    id: "syntax",
    items: [
        {
            summary: "Методы импорта Vite",
            content: "1. ?worker\n" +
                "\n" +
                "Позволяет импортировать файл как Web Worker.\n" +
                "\n" +
                "const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });\n" +
                "\n" +
                "2. ?inline\n" +
                "\n" +
                "    Преобразует содержимое файла в строку (работает для небольших ресурсов, например, SVG).\n" +
                "\n" +
                "import svgContent from './icon.svg?inline'; // svgContent содержит строку с SVG\n" +
                "\n" +
                "3. ?url\n" +
                "\n" +
                "    Импортирует путь к файлу, а не само содержимое.\n" +
                "\n" +
                "import imagePath from './image.png?url'; // imagePath содержит URL файла\n" +
                "\n" +
                "4. ?raw\n" +
                "\n" +
                "    Импортирует содержимое файла как строку (полезно для текстовых файлов, таких как .txt или .svg).\n" +
                "\n" +
                "import txtContent from './file.txt?raw'; // txtContent содержит строку с содержимым файла\n" +
                "\n" +
                "5. import.meta.glob\n" +
                "\n" +
                "    Динамический импорт всех файлов, соответствующих шаблону.\n" +
                "\n" +
                "const modules = import.meta.glob('./components/*.vue');\n" +
                "// modules — объект, где ключи — пути, а значения — функции импорта.\n" +
                "\n" +
                "6. import.meta.globEager\n" +
                "\n" +
                "    Импортирует все файлы сразу (без ленивой загрузки).\n" +
                "\n" +
                "const modules = import.meta.globEager('./data/*.js');\n" +
                "\n" +
                "7. ?jsx\n" +
                "\n" +
                "    Преобразует JSX-файлы. Полезно для случаев, если файл не имеет стандартного расширения .jsx:\n" +
                "\n" +
                "import MyComponent from './component-file.js?jsx';\n" +
                "\n" +
                "8. ?wasm\n" +
                "\n" +
                "    Импортирует WebAssembly (WASM) модули.\n" +
                "\n" +
                "import wasmModule from './module.wasm';\n" +
                "\n" +
                "9. ?module\n" +
                "\n" +
                "    Явно указывает, что файл должен быть обработан как модуль.\n" +
                "\n" +
                "import styles from './styles.css?module';\n" +
                "\n" +
                "10. ?asset\n" +
                "\n" +
                "    Преобразует файл в ассет, используемый для статических ресурсов.\n" +
                "\n" +
                "import assetUrl from './file.png?asset';"
        },
        {
          summary: 'css',
          content: 'Единицы измерения:\n' +
              'px - в пикселях\n' +
              'em - от размера шрифта родителя\n' +
              'rem - от размера шрифты root (html)\n' +
              '% - от размера родителя\n' +
              'vw, vh - ширина, высота окна в процентах\n' +
              'dvw, dvh - динамичная ширина, высота окна в процентах (использовать на мобилках)\n' +
              'vmin, vmax - выбирают между высотой и шириной. vmin берет значение той стороны что меньше, vmax - что больше\n' +
              'ch - ширина цифры 0\n' +
              'ex - высота буквы x\n' +
              'cm,mm,in,pt,pc - обычно для печати используют. Это реальные размеры\n\n' +

              'Цвета:\n' +
              'Даже в обычном hex формате можно указать прозрачность например #ffffff80 - белый с 80%' +
              'rgb, rgba - rgb(red, green, blue), a - alpha (прозрачность)\n' +
              'hsl, hsla - hsl(hue - оттенок (0–360°, 0° = красный), saturation - насыщенность (0%–100%), lightness - яркость (0%–100%)), a - alpha (прозрачность)\n' +
              'currentColor - Наследует цвет текста. Например "border: 2px solid currentColor;"\n\n' +

              'Фон:\n' +
              'background-image - изображение: url("image.jpg"), либо градиент: linear-gradient(to right, red, blue); radial-gradient(circle, yellow, green); conic-gradient(red, yellow, green); \n' +
              'background-position - позиция фона: top, bottom, left, right, center; 50% 50% (по горизонтали/вертикали); 10px 20px\n' +
              'background-size - размер фона: auto исходный размер; cover заполняет всё пространство, обрезает фото; contain масштабирует чтобы влезло, не обрезает; 100px 200px\n' +
              'background-repeat - повторение фона: repeat по умолчанию, повторяется и по X, и по Y; no-repeat не повторяется; repeat-x, repeat-y повторение только по оси X/Y\n' +
              'background-clip - до куда показать фон: border-box до границы включая border; padding-box до padding, border прозрачный; content-box только для содержимого\n' +
              'background-origin - точка отсчета дял фона: border-box от границы; padding-box от padding, border прозрачный; content-box от содержимого\n' +
              'background-attachment - фиксирован ли фон при прокрутке: scroll - дефолт; fixed - параллакс, прилип к экрану; local - фон движется только если прокручивается лично блок с фоном, работает с overflow\n\n' +
              'Сокращённая запись всех свойств - background: url("img.jpg") no-repeat center/cover fixed; что означает: \n' +
              'background-image: url("img.jpg");\n' +
              'background-repeat: no-repeat;\n' +
              'background-position: center;\n' +
              'background-size: cover;\n' +
              'background-attachment: fixed;\n\n' +

              'Текст:\n' +
              'font-family - определяет шрифт, можно указать несколько через запятую а браузер возьмет первый доступный\n' +
              'font-weight - от 100 тонкого до 900 толстого; normal = 400 (обычный); bold = 700 (жирный)\n; lighter — легче родительского; bolder — жирнее родительского' +
              'font-style - наклон: normal дефолт; italic курсив, часто отдельный файл шрифта; oblique наклон текста без отдельного шрифта (буквы наклоняются программно)\n' +
              'font-variant - варианты: normal дефолт; small-caps маленькие заглавные буквы (не трогает уже заглавные, только строчные); all-small-caps все буквы маленькие заглавные; oldstyle-nums цифры старого стиля; lining-nums цифры в линию; tabular-nums цифры фиксированной ширины\n' +
              'line-height - высоат строки: разные значения, но можно например 1.5 без единицы измерения и будет относительно размера шрифта\n' +
              'letter-spacing - расстояние между буквами: normal - дефолт\n' +
              'word-spacing - расстояние между словами: normal - дефолт\n' +
              'text-align - горизонтальное выравнивание текста: left, right, center, justify (по ширине блока), start, end\n' +
              'text-decoration - оформление: none без подчеркивания; underline подчеркнутый; overline линия сверху; line-through зачеркнутый. Можно сразу несколько значений\n' +
              'text-transform - регистр: none дефолт; uppercase все заглавные; lowercase все строчные; capitalize первая буква каждого слова заглавная\n' +
              'text-indent - отступ первой строки\n' +
              'white-space - пробелы и переносы браузером: normal дефолт; nowrap запрещено переносить; pre сохраняет все пробелы и переносы; pre-wrap переносы по словам + сохранение пробелов; pre-line переносы по словам, пробелы сжимаются\n' +
              'word-wrap / overflow-wrap - перенос длиннх слов (word-wrap мы не используем это старый синтаксис): normal дефолт; break-word длинные слова разрываются, чтобы не выходили за блок\n' +
              'direction - направление текста: ltr дефолт; rtl справа налево\n' +
              'unicode-bidi - \n\n' +

              'Border:\n' +
              'border-width - thin тонкая линия; medium средняя толщина; thick толстая линия;\n' +
              'border-color - transparent невидимый но занимает место; currentColor берет цвет текста;\n' +
              'border-style - none дефолт; solid сплошная; dotted точечная с круглыми; dashed пунктирная; double двойная сплошная; groove типа впадина; ridge наоборот типа выступ; inset как будто бы жлемент вдавлен в сайт; outset как будто элемент выступает;\n' +
              'Рельефные (groove, ridge, inset, outset) используют цвет рамки для расчёта светлых и тёмных оттенков, поэтому они зависят от border-color\n\n' +

              'Display:\n' +
              'block - занимает всю ширину, например div или p такой\n' +
              'inline - занимает только свою ширину, например span\n' +
              'inline-block - гибрид, то же что и inline но можно задать ширину и высоту\n' +
              'flex - элементы флексят\n' +
              'inline-flex - тоже флексят, но контейнер не занимает всю ширину\n' +
              'grid - сетка типа\n' +
              'inline-grid - сетка с inline контейнером\n' +
              'none - элемент не существует\n' +
              'list-item - элемент теперь пункт списка, добавляет маркер или номер как у li например\n' +
              'table - ведет себя как <table>\n' +
              'inline-table - тот же table но inline\n\n' +

              'Table (таблица):\n' +
              'table-layout - управление шириной колонок: auto подстраивается под содержимое; fixed равномерное распределение ширины, игнорируя содержимое (быстрее рендерится)\n' +
              'vertical-align - выравнивает конетнт, работает с table-cell: top по верху; middle центру, дефолт; bottom снизу; baseline линия текста соседних ячеек; sub 2 в H₂O; super 2 в x²; text-top, text-bottom верх, низ текста относительно шрифта строки\n' +
              'caption-side - для table-caption: top, bottom\n' +
              'border-collapse - взаимодействие границ: collapse границы ячеек сливаются в одну; separate границы остаются отдельным, можео использовать border-spacing\n' +
              'border-spacing - задает расстояние между ячейками\n' +
              'empty-cells - видимость пустых ячеек: show, hide' +
              'Дисплеи:\n' +
              'table-row - то же что и <tr>, ряд таблицы\n' +
              'table-cell - то же что и <td>, ячейка таблицы, автоматически подстраивается по высоте, по умолчанию vertical-align: middle.\n' +
              'table-caption - то же что и <caption>, заголовок, отображается над или под таблицей, зависит от caption-side\n' +
              'table-column - то же что и <col>, для задания стилей например цвет, ширина. Не создает ячейку, только стилизует\n' +
              'table-column-group - то же что и <colgroup>, группировко колонок\n' +
              'table-row-group - то же что и <tbody>, группировка рядов\n' +
              'table-header-group - то же что и <thead>, заголовочная группа рядов\n' +
              'table-footer-group - то же что и <tfoot>, нижняя группа рядов\n' +

              'Видимость:\n' +
              'visibility - visible дефолт; hidden невидимый но занимает место; collapse для таблиц: скрывает элемент и убирает его место\n' +
              'opacity - от 0 до 1\n\n' +

              'Flex:\n' +
              'flex-direction - направление оси: row, row-reverse, column, column-revers\n' +
              'flex-wrap - перенгс строк: nowrap, wrap, wrap-reverse\n' +
              'flex-flow - сокращенная запись. Например flex-flow: row wrap;\n' +
              'justify-content - выравнивание по оси: flex-start дефолт; flex-end; center; space-between первый и последний прилипли к стенкам, между ними равномерно; space-around у каждого отступы; space-evenly везде равные отступы\n' +
              'align-items - выравнивание поперек оси: stretch растягивает по высоте контейнера, дефолт; flex-start; flex-end; center; baseline выравнивание по базовой линии текста\n' +
              'align-content - выравнивание строк (если их несколько): flex-start; flex-end; center; space-between как у jc; space-around как у jc; stretch строки растягиваются по высоте контейнера\n' +
              'gap, row-gap, column-gap - отступы между элементами. gap это сокращенная запись row-gap и column-gap\n' +
              'order - меняет порядок элементов (дается самим элементам, а не контейнеру). 0 дефолт\n' +
              'flex-grow - определяет, может ли элемент расти, чтобы занять свободное место: 0 не растет, дефолт; 1 растет равномерно с другими; 2 растет в 2 раза быстрее чем 1 (и так далее)\n' +
              'flex-shrink - отвечает за сжатие, когда не хватает места: 1 сжимается, дефолт; 0 не сжимается\n' +
              'flex-basis - определяет начальный размер элемента для главной оси перед тем как флекс начнет его менять под оставшееся место(аналог width, но для флексов. "говорит: «считай, что я хочу стартовать с такого размера»". Если grow 0, работает как фиксированная ширина, иначе как минимальная): auto дефолт; 0 прадпочитает начинать с нулевого размера типа;\n' +
              'flex - короткая запись, совмещающий: grow shrink basis\n' +
              'align-self - личный align-items для конкретного элемента: auto берет из align-items, дефолт; имеет такие же варианты значений как и у align-items\n\n' +

              'Grid(сетка):\n' +
              'grid-template-columns, grid-template-rows - задают колонки и строки сетки: auto подстраивается под контент; fr это доля, например grid-template-columns: 1fr 2fr тогда первый элемент занимает треть, а второй 2 трети; repeat(n, value) повтор, например grid-template-columns: repeat(3, 1fr) делает 3 равных элемента; minmax(min, max) динамическая ширина, например grid-template-columns: repeat(3, minmax(150px, 1fr)) делает 3 элемента с размеров минимум 150 пикселей и максимум 1 фрейм; nакже можно использовать auto-fill и auto-fit например grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) создаст как можно больше колонок шириной минимум 200px, если остались пустые колонки на которых не хватило карточек то они так и останутся; если же в последнем примере вместо fill написать fit и при этом карточек также не хватило и остались пустые колонки то они схлопываются и карточки растяиваются чтобы заполнить пустые места\n' +
              'grid-area, grid-template-areas - позволяет задать схему расположения по именам. Например задаем элементу grid-area: header; и далее пишем grid-template-areas:\n' +
              '  "header header"\n' +
              '  "sidebar main"\n' +
              '  "footer footer";\n' +
              'grid-auto-rows, grid-auto-columns - устанавливает размер строк или колонок, которые создаются автоматически (если элементов больше, чем явно заданных ячеек): например если только 2 колонки (grid-template-columns: 1fr 1fr;) а элементов 3, то написав grid-auto-rows: 200px лишний элемент перекинется на новую строку которая будет иметь высоту 200px\n' +
              'grid-auto-flow - управляет направлением заполнения сетки (аналог fd из Flex): row дефолт; сolumn; row dense / column dense ...с заполнением пустоты, уплотняя элементы\n' +
              'gap, row-gap, column-gap - то же самое, что и у Flex\n' +
              'grid-column, grid-row - позволяют разместить элемент в нужных линиях сетки: auto дефолт; например grid-column: 1 / 3; от линии 1 до линии 3; можно еще использовать span вот так grid-column: span 2; означает занять n колонок (в моем примере 2)\n' +
              'grid-area  - либо дает имя для grid-template-areas либо может делать сразу всё (даётся элементу): например grid-area: 2 / 1 / 4 / 3 (использует grid-row-start, grid-column-start, grid-row-end, grid-column-end) \n' +
              'justify-self, align-self, place-self (по оси, поперек оси, обе оси. Если не ошибаюсь, то зависит от grid-auto-flow) - управляют выравниванием элемента внутри лично своей ячейки: start; end; center; stretch  дефолт (растягивает элемент)\n' +
              'justify-items, align-items, justify-content, align-content, place-items, place-content - выравнивание всей сетки в контейнере: justify-items, align-items, place-items (обе оси) работают на уровне ячейки; justify-content, align-content, place-content (обе оси) работают на уровне всей сетки; \n' +
              'grid-template - можно обьеденить шаблон, например: grid-template:\n' +
              '  "header header" 100px\n' +
              '  "sidebar main" auto\n' +
              '  "footer footer" 50px /\n' +
              '  200px 1fr;\n' +
              'subgrid (display) -  позволяет вложенному гриду наследовать линии родителя: например у родителя 3 колонки 200px,1fr,300px, тогда у ячейки с субгридом будет такая же сетка с такими же 3 колонками\n' +
              'order - как и у Flex изменяет порядок элементов в сетке\n\n' +

              'Position:\n' +
              'statis дефолт; relative позиционируется относительно себя, absolute становится "призрачным" и позиционируется относительно родителя с любым position кроме статик, иначе body; fixed выпадает из потока и прилипает к экрану; sticky это комбинация relative и sticky прилипая к экрану когда доходит до своей конечной позиции\n' +
              'z-index - определяет порядок наложение, кро выше кто ниже. Может быть отрицательным\n' +

              'Остальное:\n'
        },
    ]
}