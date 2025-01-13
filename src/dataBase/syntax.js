export default {
    title: "Синтаксис",
    navTitle: "Синтаксис",
    id: "syntax",
    items: [
        {
            summary: "Методы импорты Vite",
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
    ]
}